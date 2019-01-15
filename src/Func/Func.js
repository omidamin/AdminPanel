import React from 'react';
import axios from "axios/index";
import Modal from "antd/lib/modal/index";

export const loadFunc = (props, tickets, callback, render = null) => {
    let ticketScroll = []
    tickets.find((t, i) => {
        ticketScroll.push(t)
        return i >= props.get.nScroll + 5
    })

    let hasMore
    if (ticketScroll.length >= tickets.length) {
        hasMore = false
    } else {
        hasMore = true
    }

    if (render === null) {
        props.set(props.get.nScroll + 5, 'nScroll')
        props.set(hasMore, 'hasMore')
    }
    return callback(ticketScroll)

}

export const Error = (props, message, messageButtom, callback) => {
    Modal.error({
        // title: 'Updated title',
        content: <div style={{textAlign: 'center'}}>
            <h6 >
                {message}
            </h6>
        </div>,
        okText: messageButtom,
        onOk() {
            callback()
        },
    });
    props.set(false, 'start')
    props.set(false, 'loading')
    clearInterval(props.get.expireTime);
    clearTimeout(props.get.timeoutAll);
    clearTimeout(props.get.timeoutModal);
    let searchID = localStorage.getItem('searchID')
    localStorage.clear()
    if (searchID !== null) {
        localStorage.setItem('searchID', searchID)
    }
}

export const Auth = (props, callback) => {
    let data = {
        "email": "test",
        "password": "123"
    }
    fetchRepos('https://test.com', 'post', data, (r, s) => {
        try {
            if (r.data.success) {
                props.set(r.data.api_token, 'api_token')
                localStorage.setItem('api_token', r.data.api_token)
                return callback(r.data.api_token, 1)
            }
        } catch (e) {
            return callback(e, 0)
        }
    }, 0, props)
}

export const fetchRepos = (url, method, data = null, callback, checkToken = 0, props) => {

    const DoAxios = (api_token = null) => {
        let options
        if (method === 'get') {
            options = [url]
        } else {
            if (api_token !== null) {
                data.api_token = api_token
            }
            options = [url, data]
        }

        axios[method](...options)
            .then(response => {
                    return callback(response, 1)
                }
            )
            .catch(error => {
                if (error.response !== undefined) {
                    if (error.response.data.data === 'Unauthenticated.') {
                        localStorage.removeItem('api_token')
                        props.get.api_token = ''
                        fetchRepos(url, method, data, (r, s) => {
                            return callback(r, s)
                        }, 1, props)
                    } else {
                        return callback(error.response, 0)
                    }
                } else {

                }

            });
    }
    let LastApi_token = ''
    if (props.get.api_token === '') {
        if (localStorage.getItem('api_token') !== null) {
            LastApi_token = localStorage.getItem('api_token')
        }

    } else {
        LastApi_token = props.get.api_token
    }
    if (checkToken) {

        if (LastApi_token === '' || LastApi_token === null) {
            Auth(props, (newApi_token, status) => {
                if (status) {
                    DoAxios(newApi_token)
                } else {
                }
            })

        } else {
            DoAxios(LastApi_token)
        }
    } else {
        DoAxios(LastApi_token)
    }

}

export const instance = axios.create({
    baseURL: 'https://test.com/'
});

export  const Independent=(data)=>{
    return JSON.parse(JSON.stringify(data))
}




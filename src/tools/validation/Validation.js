import  React from 'react';
import validator from 'validator';

export  const required = (value,title=null,lang='FA') => {

    if (!value.toString().trim().length) {
        console.log('lang',lang);
        if (lang==='FA'){
            return ` فیلد ${title} ضروری است `;

        } else {
            return `  ${title}  required `;
        }
    }else {
        return ''
    }

};

export const isEmail = (value,title=null,lang='FA') => {
    if (!validator.isEmail(value.trim())) {
        return `فرمت ایمیل نمی باشد` ;
    }else {
        return ''
    }
};

export const isLatine = (value,lang='FA') => {
    // if (!validator.isAlpha(value,{ allow_spaces: true })) {
    if (!validator.isAlpha(validator.blacklist(value, ' '))) {
        return   'حروف لاتین نمی باشد'
    }
};
export const isPersian = (value,lang='FA') => {
    // const REGEX = /^[\u0600-\u06FF\s]+$/;
    const REGEX = /^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/;
    const match = REGEX.exec(value);
    // console.log('match',match); // 1
        if (match==null) {
            return  'حروف فارسی نمی باشد'
    }
};
export const isMobilePhone = (value,lang='FA') => {
        if (!validator.isMobilePhone(value.trim(),['fa-IR'])) {
            return  'فرمت موبایل  نیست '
    }
};

export const max = (value, title=null,props,lang='FA') => {

    // get the maxLength from component's props
    if (value.toString().trim().length > props.max) {
        // Return jsx
        return   ` حداکثر کاراکتر${props.max}  است `
    }
    return ''
};
export const min = (value, title=null,props,lang='FA') => {

    // get the maxLength from component's props
    if (value.toString().trim().length < props.min) {
        // Return jsx
        return   ` حداقل کاراکتر${props.min}است `
    }
};
///
export const docID = (value, title=null,props,lang='FA') => {
    const code=calculateDocId(value.trim())
    if (!code) {
        return   'فرمت کد ملی نمی باشد '
    }
};
export const docIDPassport = (value, title=null,props,lang='FA') => {

    if (!validator.isAlphanumeric(validator.blacklist(value, ' '))) {
        return  'فرمت شماره پاسپورت اشتباه است '
    }
};
export const free = (value, title=null,props,lang='FA') => {

};

const calculateDocId= (input)=> {
    const REGEX = /^\d{10}$/;
    if (input === '0000000000' || input === '1111111111' || input === '2222222222' ||
        input === '3333333333' || input === '4444444444' || input === '5555555555' ||
        input === '6666666666' || input === '7777777777' || input === '8888888888' || input === '9999999999') {
        return false;
    }
    else if (REGEX.exec(input)===null){

        return false;
    }

    var check = parseInt(input[9]);
    var sum = 0;
    var i;
    for (i = 0; i < 9; ++i) {
        sum += parseInt(input[i]) * (10 - i);
    }
    sum %= 11;

    return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
};

export const password = (value, props, components,lang='FA') => {
    // NOTE: Tricky place. The 'value' argument is always current component's value.
    // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
    // But if we're changing 'confirm' component - the condition will always be true
    // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
    if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
        // 'confirm' - name of input
        // components['confirm'] - array of same-name components because of checkboxes and radios
        return <span className="error">Passwords are not equal.</span>
    }
};
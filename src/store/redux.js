import  {main} from './detail/All';

export const initialState = {
    ...main(),
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const reducer = ( state = initialState, action ) => {

    if (action.type!==undefined) {
        if (action.type==='all') {

            return updateObject( state, action.data  );

        }else {
            return updateObject( state, { [action.type]: action.data } );

        }
    }else {
        return state;
    }

};
export default reducer;
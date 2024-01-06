import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'latifcaannnn',
        fullName: 'Latif Can',
        avatar: 'https://pbs.twimg.com/profile_images/1593726999209680897/SrkxMXKn_400x400.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'latifcaannnn',
            fullName: 'Latif Can',
            avatar: 'https://pbs.twimg.com/profile_images/1593726999209680897/SrkxMXKn_400x400.jpg'
        },
        {
            id: 1,
            username: 'MaliPalak',
            fullName: 'Malimsss',
            avatar: 'https://pbs.twimg.com/profile_images/1663606271080116224/7MeUp4QV_400x400.jpg'
        }
    ]
}


const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // state manipule etme metodlari
        _addAccounts: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            } 
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccounts, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer
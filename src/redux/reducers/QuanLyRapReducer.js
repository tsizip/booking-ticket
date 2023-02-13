const initialState = {
    heThongRapChieu:[]
}

const QuanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HTR':
            state.heThongRapChieu = action.data
            // console.log('reducer', typeof(state.heThongRapChieu))
            return { ...state }

        default:
            return { ...state }
    }
}

export default QuanLyRapReducer

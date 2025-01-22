import { create } from "zustand"

    //Step 1 Create Store
    const juneStore = (set)=>({
        firstName: 'july',
        lastName : 'august',
        address: { street: "1234", zipcode: "567"},
        profile: ['sept', 'oct'],
        products: [
            {id:1, title: 'ASUS', price: 50000},
            {id:2, title:'MSI', price:40000}
        ],
        number:5,
        actionIncrease:()=> {
            //code func body
            //* setNumber2((state) => ({num: state.num +1}));
            
            // console.log('Easy!!!')
            set((state)=>({number:state.number + 1}));            
        },
        actionDecrease:()=>{
            set((state)=> ({ number: state.number - 1}));
            // console.log('Hello,Decrease')
        },

        // actionDecrease:()=>{
        //     set((state) => ({ number: Math.max(0, state.number -1)}));
        // },

        actionMulti: () => {
            set((state) => ({ number: state.number * 2}));
        },

        actionDivide: (newValue) => {
            console.log(newValue)
            set((state) => ({ number: state.number / 2}));
        },
    });

    const useJuneStore = create(juneStore)

    export default useJuneStore
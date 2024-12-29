'use client'
import { Provider } from 'react-redux';
import store from '@/app/redux/store';
import PaymentContainer from './components/PaymentContainer';
const Page = () => {
    return (
        <Provider store={store}>
            <div className="flex flex-col items-center">
                <div className="w-2/3 flex flex-col">
                    <h1 className="font-bold text-2xl">Payments</h1>
                    <br />
                    <PaymentContainer />
                </div>
            </div>
        </Provider>
    );
};
export default Page;
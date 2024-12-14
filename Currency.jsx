import React, { useState, useEffect } from 'react';
import '../css/currency.css';
import { GoPaperAirplane } from "react-icons/go";
import axios from 'axios';

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('USD');
    const [result, setResult] = useState(0);

    let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
    let API_KEY = "fca_live_aKLO12SkNDmobM2pHysmYk1Nzq8yFkpOlSyQBLsA";

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const conversionRate = response.data.data[toCurrency];
        const result = conversionRate * amount;
        setResult(result);
    };


    useEffect(() => {
        document.body.classList.add('currency-page');

        return () => {
            document.body.classList.remove('currency-page');
        };
    }, []);

    return (
        <div className="ilk_katman_div_rengi_icin_div">
            <div className='currency-div'>
                <div>
                    <h3 style={{ backgroundColor: "white" }}>
                        BTRY EXCHANGE DÖVİZ KURU UYGULAMASI
                    </h3>
                </div>

                <div>
                    <input
                        value={amount}
                        type="number"
                        className='amount'
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <select
                        className='from-currenc-option'
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        <option>USD</option>
                        <option>EUR</option>
                        <option>TRY</option>
                    </select>

                    <GoPaperAirplane
                        className='bu_bir_ok_ikonu_ayiktiriyim_knk_icon'
                        style={{ color: "blue", backgroundColor: "red", fontSize: "50px" }}
                    />

                    <select className='to-currency-option' onChange={(e) => setToCurrency(e.target.value)}>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>TRY</option>
                    </select>

                    <input
                        value={result} onChange={(e) => setResult(e.target.value)}
                        type="number" className='result'
                    />
                </div>

                <div>
                    <button onClick={exchange} className="çevir-butonu">ÇEVİR</button>
                </div>
            </div>
        </div>
    );
}

export default Currency;

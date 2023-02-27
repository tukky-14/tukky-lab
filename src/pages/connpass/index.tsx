import { Button, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import axios from 'axios';
import dayjs from 'dayjs';
import { useState } from 'react';
import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { API_ENDPOINT } from '../../constants/api';

// https://connpass.com/api/v1/event/?ymd=20220228

export default function Connpass() {
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

    const handleButtonClick = async () => {
        const { data } = await axios.get(`${API_ENDPOINT.CONNPASS}?ymd=${date.replaceAll('-', '')}`);
        console.log(data);
    };

    const handleDateChange = (date: any) => {
        console.log(date);
    };

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="connpass検索">
                <div className="flex w-full gap-4 my-3">
                    <DesktopDatePicker
                        label="日付"
                        inputFormat="YYYY/MM/DD"
                        value={date}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <Button variant="contained" onClick={handleButtonClick}>
                        検索
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 mr-6 mt-2 mb-10"></div>
            </MainContents>
        </PrivateRoute>
    );
}

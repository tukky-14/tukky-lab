/* eslint @typescript-eslint/no-explicit-any: off */
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';

import API from '../../awsConfig/api';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

export default function Connpass() {
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [events, setEvents] = useState([]);

    const handleSearchClick = async () => {
        try {
            if (date === 'Invalid Date') {
                alert('有効な日付を入力してください');
                return;
            }
            setIsLoading(true);

            const getApiInit = {
                queryStringParameters: {
                    ymd: date.replaceAll('-', ''),
                },
            };
            const { body } = await API.get('dev', '/connpass', getApiInit);
            if (!Object.keys(body).length) {
                alert('データは取得できませんでした');
                setIsLoading(false);
                return;
            }
            setEvents(body.sort((a: any) => (a.address !== 'オンライン' ? -1 : 1)));

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    const handleDateChange = (date: any) => {
        setDate(date.format('YYYY-MM-DD'));
    };

    return (
        <PrivateRoute>
            <Loading open={isLoading} />
            <Header />
            <MainContents title="connpass検索">
                <div className="flex w-full gap-4 my-3">
                    <DesktopDatePicker
                        inputFormat="YYYY/MM/DD"
                        label="日付"
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                        value={date}
                    />
                    <Button onClick={handleSearchClick} variant="contained">
                        検索
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mr-6 mt-2 mb-10">
                    {events.map((event: any, index: number) => (
                        <div className="relative h-[220px] border rounded-lg p-4 hover:bg-blue-200 duration-300" key={index}>
                            <h3 className="font-bold">{event.title}</h3>
                            <p className="h-12 mt-2 overflow-hidden text-overflow-ellipsis text-sm">{event.catch}</p>
                            <div className="absolute bottom-2 text-sm">
                                <p>
                                    時間：{event.started_at.split('T')[1].substr(0, 5)} ~{' '}
                                    {event.ended_at.split('T')[1].substr(0, 5)}
                                </p>
                                <p>
                                    定員：{event.limit}名（参加：{event.accepted} / 補欠：{event.waiting}）
                                </p>
                                <p>場所：{event.address}</p>
                            </div>
                            <a
                                className="absolute bottom-2 right-2 text-blue-600 hover:scale-110 duration-300"
                                href={event.event_url}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <OpenInNewIcon />
                            </a>
                        </div>
                    ))}
                </div>
            </MainContents>
        </PrivateRoute>
    );
}

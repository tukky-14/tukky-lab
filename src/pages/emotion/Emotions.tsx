import React from 'react';

type Props = {
    emotions: { type: string; confidence: string }[];
};

const Emotions = (props: Props) => {
    const { emotions } = props;
    return (
        <div className="w-full sm:w-1/4 mb-2 rounded">
            <p className="mb-1">【分析結果】</p>
            {emotions.map((row: any, index: number) => (
                <div className="w-full flex" key={index}>
                    <p className="w-1/2 border border-solid	 bg-gray-100">{row.type}</p>
                    <p className="w-1/2 border text-right">{row.confidence}</p>
                </div>
            ))}
        </div>
    );
};

export default Emotions;

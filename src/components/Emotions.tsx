/* eslint @typescript-eslint/no-explicit-any: off */
import { EmotionProps } from '../types/emotion';

const Emotions = (props: EmotionProps) => {
    const { emotions } = props;
    return (
        <div className="w-full sm:w-1/4 mb-2 rounded">
            <h3 className="mb-1 text-center">【分析結果】</h3>
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

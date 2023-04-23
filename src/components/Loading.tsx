import { Modal } from '@mui/material';
import { LoadingProps } from '../types/common';

const Loading = (props: LoadingProps) => {
    const { open } = props;
    return (
        <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="animate-ping h-4 w-4 bg-blue-600 rounded-full"></div>
                <span className="text-white">Loading...</span>
            </div>
        </Modal>
    );
};

export default Loading;

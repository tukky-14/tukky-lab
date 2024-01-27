import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import Swagger from '../../components/Swagger';

export default function SwaggerPage() {
    return (
        <PrivateRoute>
            <Header />
            <MainContents title="Swagger">
                <Swagger />
            </MainContents>
        </PrivateRoute>
    );
}

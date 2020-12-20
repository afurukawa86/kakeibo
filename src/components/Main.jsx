import Sidebar from './Sidebar';
import Content from './Content';

function Main() {
    return (
        <div className="flex w-full max-w-8xl mx-auto">
            <Sidebar />
            <Content />
        </div>
    )
}
export default Main;
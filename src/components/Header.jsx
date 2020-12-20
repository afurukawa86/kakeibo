import Logo from './Logo';
import Menu from './Menu';

function Header() {
    return (
        <div className="sticky top-0 z-50 w-full max-w-8xl mx-auto flex flex-none bg-white">
            <Logo />
            <Menu />
        </div>
    )
}
export default Header;
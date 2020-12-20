import Logo from './Logo';
import Menu from './Menu';

function Header() {
    return (
        <div className="sticky top-0 z-50 w-full mx-auto flex flex-none bg-preto-header bg-transparent">
            <Logo />
            <Menu />
        </div>
    )
}
export default Header;
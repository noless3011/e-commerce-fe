import Logo from '../app/icons8-buying-32.png'

export default function Header() {
    return (
        <div className="flex flex-row bg-yellow">
            <img src={Logo.src} />
        </div>
    )
}
import Logo from '../assets/svg/Logo.tsx'

function Footer() {

    return (
        <>
            <footer id="footer" className="footer p-4 border-t bg-white border-t-gray-300 mt-8">
                <div className="container mx-auto flex justify-between gap-4">
                    <a className="header-logo flex min-w-max" href='/'>
                        <Logo/>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer

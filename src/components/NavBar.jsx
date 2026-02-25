import SixSeven from './SixSeven'

function NavBar() {
    return (
        <>
            <div className='p-2 flex flex-row gap-8 items-center'>
                <SixSeven>GDG Links</SixSeven>
                <SixSeven>Other People</SixSeven>
                <SixSeven>Events</SixSeven>
            </div>
        </>
    )
}

export default NavBar;
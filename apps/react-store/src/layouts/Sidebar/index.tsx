import Link from 'next/link';

const SIDEBAR_MENU = [
    {
        id: '1_0',
        routerLink: '/',
        text: 'Home',
        icon: ' <i class="fas fa-user-friends"></i>',
    },
    {
        id: '1_1',
        routerLink: '/articles',
        text: 'Articles',
        icon: ' <i class="fas fa-user-friends"></i>',
    },
    {
        id: '1_2',
        routerLink: '/editor',
        text: 'Editor',
        icon: ' <i class="fas fa-user-friends"></i>',
    },
];

const Sidebar = () => {
    return (
        <div className="side-bar-container">
            <div className="side-bar-item flex justify-start flex-col">
                {SIDEBAR_MENU.map((menu, index) => {
                    return (
                        <Link
                            key={index}
                            href={menu.routerLink}
                            passHref
                            className={`nav-link h-full w-full flex items-center p-2 border-solid border-spacing-1 border-black`}
                        >
                            <span className="nav-title ml-2">{menu.text}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;

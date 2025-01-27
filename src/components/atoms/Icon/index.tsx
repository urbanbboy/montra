import IconProps from "./type"

export const Profile: React.FC<IconProps> = ({
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
            color={color}
        >
            <path d="M10 12.0698C13.3137 12.0698 16 9.38353 16 6.06982C16 2.75612 13.3137 0.0698242 10 0.0698242C6.68629 0.0698242 4 2.75612 4 6.06982C4 9.38353 6.68629 12.0698 10 12.0698Z" fill="#C6C6C6" />
            <path d="M13 14H7C5.14348 14 3.36301 14.7375 2.05025 16.0503C0.737498 17.363 0 19.1435 0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H17C17.7956 24 18.5587 23.6839 19.1213 23.1213C19.6839 22.5587 20 21.7956 20 21C20 19.1435 19.2625 17.363 17.9497 16.0503C16.637 14.7375 14.8565 14 13 14Z" fill="#C6C6C6" />
        </svg>

    )
}

export const ProfileActive: React.FC<IconProps> = ({
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
            color={color}
        >
            <path d="M10 12.0698C13.3137 12.0698 16 9.38353 16 6.06982C16 2.75612 13.3137 0.0698242 10 0.0698242C6.68629 0.0698242 4 2.75612 4 6.06982C4 9.38353 6.68629 12.0698 10 12.0698Z" fill="#7F3DFF" />
            <path d="M13 14H7C5.14348 14 3.36301 14.7375 2.05025 16.0503C0.737498 17.363 0 19.1435 0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H17C17.7956 24 18.5587 23.6839 19.1213 23.1213C19.6839 22.5587 20 21.7956 20 21C20 19.1435 19.2625 17.363 17.9497 16.0503C16.637 14.7375 14.8565 14 13 14Z" fill="#7F3DFF" />
        </svg>
    )
}

export const Home: React.FC<IconProps> = ({
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
            color={color}
        >
            <path d="M23.67 9.56005L21.67 7.74005L14 0.780046C13.45 0.288091 12.738 0.0161133 12 0.0161133C11.2621 0.0161133 10.55 0.288091 10 0.780046L2.35002 7.78005L0.350019 9.60005C0.215344 9.7367 0.122823 9.9092 0.0834928 10.097C0.0441625 10.2848 0.0596837 10.4799 0.128204 10.6591C0.196725 10.8383 0.315353 10.994 0.469935 11.1077C0.624518 11.2213 0.80853 11.2881 1.00002 11.3C1.25331 11.2886 1.49279 11.1814 1.67002 11L2.00002 10.7V21C2.00002 21.7957 2.31609 22.5588 2.8787 23.1214C3.44131 23.684 4.20437 24 5.00002 24H19C19.7957 24 20.5587 23.684 21.1213 23.1214C21.6839 22.5588 22 21.7957 22 21V10.74L22.33 11.04C22.5134 11.2067 22.7522 11.2994 23 11.3C23.2016 11.2995 23.3984 11.2381 23.5645 11.1237C23.7305 11.0094 23.8582 10.8475 23.9306 10.6594C24.0031 10.4712 24.017 10.2656 23.9704 10.0694C23.9239 9.8732 23.8192 9.69566 23.67 9.56005Z" fill="#C6C6C6" />
        </svg>
    )
}

export const HomeActive: React.FC<IconProps> = ({
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
            color={color}
        >
            <path d="M23.67 9.55998L21.67 7.73998L14 0.779984C13.45 0.28803 12.738 0.0160522 12 0.0160522C11.2621 0.0160522 10.55 0.28803 10 0.779984L2.35002 7.77998L0.350019 9.59999C0.215344 9.73664 0.122823 9.90914 0.0834928 10.0969C0.0441625 10.2847 0.0596837 10.4799 0.128204 10.6591C0.196725 10.8383 0.315353 10.994 0.469935 11.1076C0.624518 11.2213 0.80853 11.288 1.00002 11.3C1.25331 11.2885 1.49279 11.1813 1.67002 11L2.00002 10.7V21C2.00002 21.7956 2.31609 22.5587 2.8787 23.1213C3.44131 23.6839 4.20437 24 5.00002 24H19C19.7957 24 20.5587 23.6839 21.1213 23.1213C21.6839 22.5587 22 21.7956 22 21V10.74L22.33 11.04C22.5134 11.2067 22.7522 11.2993 23 11.3C23.2016 11.2995 23.3984 11.238 23.5645 11.1237C23.7305 11.0093 23.8582 10.8475 23.9306 10.6593C24.0031 10.4712 24.017 10.2655 23.9704 10.0693C23.9239 9.87314 23.8192 9.6956 23.67 9.55998Z" fill="#7F3DFF" />
        </svg>
    )
}

export const Transaction: React.FC<IconProps> = ({
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg
            width="28"
            height="22"
            viewBox="0 0 28 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
            color={color}
        >
            <path d="M18.1301 12.9298V13.9298C18.1301 14.5865 18.0007 15.2366 17.7495 15.8433C17.4982 16.4499 17.1299 17.0011 16.6656 17.4654C16.2013 17.9297 15.6501 18.298 15.0435 18.5492C14.4369 18.8005 13.7867 18.9298 13.1301 18.9298H9.87007C9.85465 19.4767 9.68997 20.009 9.39386 20.469C9.09775 20.929 8.68147 21.2993 8.19007 21.5398C7.78024 21.7446 7.32822 21.8508 6.87007 21.8498C6.19234 21.8539 5.53322 21.6283 5.00007 21.2098L1.29007 18.2998C0.928742 18.0194 0.636313 17.6601 0.435145 17.2493C0.233976 16.8386 0.129395 16.3872 0.129395 15.9298C0.129395 15.4725 0.233976 15.0211 0.435145 14.6104C0.636313 14.1996 0.928742 13.8403 1.29007 13.5598L5.00007 10.6498C5.44707 10.2931 5.98673 10.0716 6.55545 10.0113C7.12417 9.95108 7.69826 10.0547 8.21007 10.3098C8.8916 10.6358 9.41647 11.2182 9.67007 11.9298H17.1001C17.2339 11.9258 17.3672 11.9487 17.492 11.9972C17.6168 12.0456 17.7306 12.1187 17.8267 12.2119C17.9227 12.3052 17.9991 12.4168 18.0512 12.5401C18.1033 12.6634 18.1301 12.796 18.1301 12.9298Z" fill="#C6C6C6" />
            <path d="M27.8701 6.06995C27.8702 6.52728 27.7657 6.97857 27.5647 7.38934C27.3636 7.8001 27.0713 8.15946 26.7101 8.43995L23.0001 11.35C22.4595 11.77 21.7947 11.9986 21.1101 12C20.652 12.0009 20.2 11.8947 19.7901 11.69C19.1086 11.364 18.5837 10.7816 18.3301 10.07H10.8701C10.6049 10.07 10.3505 9.9646 10.163 9.77706C9.97547 9.58952 9.87012 9.33517 9.87012 9.06995V8.06995C9.87012 6.74387 10.3969 5.4721 11.3346 4.53442C12.2723 3.59674 13.544 3.06995 14.8701 3.06995H18.1301C18.1423 2.5109 18.3105 1.96638 18.6157 1.49784C18.9209 1.02929 19.351 0.655373 19.8574 0.418276C20.3638 0.18118 20.9264 0.0903436 21.4817 0.156018C22.0371 0.221693 22.563 0.441264 23.0001 0.789954L26.7101 3.69995C27.0713 3.98045 27.3636 4.33981 27.5647 4.75057C27.7657 5.16134 27.8702 5.61263 27.8701 6.06995Z" fill="#C6C6C6" />
        </svg>

    )
}

export const TransactionActive: React.FC<IconProps> = ({
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg
            width="28"
            height="22"
            viewBox="0 0 28 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
            color={color}
        >
            <path d="M18.1301 12.9298V13.9298C18.1301 14.5865 18.0007 15.2366 17.7495 15.8433C17.4982 16.4499 17.1299 17.0011 16.6656 17.4654C16.2013 17.9297 15.6501 18.298 15.0435 18.5492C14.4369 18.8005 13.7867 18.9298 13.1301 18.9298H9.87007C9.85465 19.4767 9.68997 20.009 9.39386 20.469C9.09775 20.929 8.68147 21.2993 8.19007 21.5398C7.78024 21.7446 7.32822 21.8508 6.87007 21.8498C6.19234 21.8539 5.53322 21.6283 5.00007 21.2098L1.29007 18.2998C0.928742 18.0194 0.636313 17.6601 0.435145 17.2493C0.233976 16.8386 0.129395 16.3872 0.129395 15.9298C0.129395 15.4725 0.233976 15.0211 0.435145 14.6104C0.636313 14.1996 0.928742 13.8403 1.29007 13.5598L5.00007 10.6498C5.44707 10.2931 5.98673 10.0716 6.55545 10.0113C7.12417 9.95108 7.69826 10.0547 8.21007 10.3098C8.8916 10.6358 9.41647 11.2182 9.67007 11.9298H17.1001C17.2339 11.9258 17.3672 11.9487 17.492 11.9972C17.6168 12.0456 17.7306 12.1187 17.8267 12.2119C17.9227 12.3052 17.9991 12.4168 18.0512 12.5401C18.1033 12.6634 18.1301 12.796 18.1301 12.9298Z" fill="#7F3DFF" />
            <path d="M27.8701 6.06995C27.8702 6.52728 27.7657 6.97857 27.5647 7.38934C27.3636 7.8001 27.0713 8.15946 26.7101 8.43995L23.0001 11.35C22.4595 11.77 21.7947 11.9986 21.1101 12C20.652 12.0009 20.2 11.8947 19.7901 11.69C19.1086 11.364 18.5837 10.7816 18.3301 10.07H10.8701C10.6049 10.07 10.3505 9.9646 10.163 9.77706C9.97547 9.58952 9.87012 9.33517 9.87012 9.06995V8.06995C9.87012 6.74387 10.3969 5.4721 11.3346 4.53442C12.2723 3.59674 13.544 3.06995 14.8701 3.06995H18.1301C18.1423 2.5109 18.3105 1.96638 18.6157 1.49784C18.9209 1.02929 19.351 0.655373 19.8574 0.418276C20.3638 0.18118 20.9264 0.0903436 21.4817 0.156018C22.0371 0.221693 22.563 0.441264 23.0001 0.789954L26.7101 3.69995C27.0713 3.98045 27.3636 4.33981 27.5647 4.75057C27.7657 5.16134 27.8702 5.61263 27.8701 6.06995Z" fill="#7F3DFF" />
        </svg>
    )
}

export const PieChart: React.FC<IconProps> = ({
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
            color={color}
        >
            <path d="M24 11H13V0C15.8412 0.228368 18.5083 1.46063 20.5239 3.47614C22.5394 5.49166 23.7716 8.1588 24 11Z" fill="#C6C6C6" />
            <path d="M24 13C23.801 15.2756 22.9566 17.4471 21.566 19.2594C20.1754 21.0716 18.2965 22.4493 16.15 23.2306C14.0035 24.0119 11.6786 24.1643 9.44844 23.6699C7.2183 23.1755 5.1756 22.0549 3.56038 20.4396C1.94515 18.8244 0.82449 16.7817 0.330092 14.5516C-0.164306 12.3214 -0.011906 9.99652 0.769384 7.85001C1.55067 5.7035 2.92839 3.82457 4.74065 2.43401C6.55292 1.04346 8.72442 0.199045 11 0V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H24Z" fill="#C6C6C6" />
        </svg>
    )
}


export const PieChartActive: React.FC<IconProps> = ({
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...attributes}
            color={color}
        >
            <path d="M24 11H13V0C15.8412 0.228368 18.5083 1.46063 20.5239 3.47614C22.5394 5.49166 23.7716 8.1588 24 11Z" fill="#7F3DFF" />
            <path d="M24 13C23.801 15.2756 22.9566 17.4471 21.566 19.2594C20.1754 21.0716 18.2965 22.4493 16.15 23.2306C14.0035 24.0119 11.6786 24.1643 9.44844 23.6699C7.2183 23.1755 5.1756 22.0549 3.56038 20.4396C1.94515 18.8244 0.82449 16.7817 0.330092 14.5516C-0.164306 12.3214 -0.011906 9.99652 0.769384 7.85001C1.55067 5.7035 2.92839 3.82457 4.74065 2.43401C6.55292 1.04346 8.72442 0.199045 11 0V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H24Z" fill="#7F3DFF" />
        </svg>
    )
}
export const mainMenu = [
    {
        path: '/',
        title: 'Anasayfa',
        icon: {
            active: (
                <svg 
                viewBox="0 0 24 24" 
                width={26.25} 
                height={26.25} 
                className="block"
                >
                   <path
                   fill="#fff"
                   d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z" 
                   />
                   </svg>
            ),
            pasive: (
                <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path
                  fill="#e7e9ea"
                  d="M 21.591 7.146 L 12.52 1.157 c -0.316 -0.21 -0.724 -0.21 -1.04 0 l -9.071 5.99 c -0.26 0.173 -0.409 0.456 -0.409 0.757 v 13.183 c 0 0.502 0.418 0.913 0.929 0.913 h 6.638 c 0.511 0 0.929 -0.41 0.929 -0.913 v -7.075 h 3.008 v 7.075 c 0 0.502 0.418 0.913 0.929 0.913 h 6.639 c 0.51 0 0.928 -0.41 0.928 -0.913 V 7.904 c 0 -0.301 -0.158 -0.584 -0.408 -0.758 Z M 20 20 l -4.5 0.01 l 0.011 -7.097 c 0 -0.502 -0.418 -0.913 -0.928 -0.913 H 9.44 c -0.511 0 -0.929 0.41 -0.929 0.913 L 8.5 20 H 4 V 8.773 l 8.011 -5.342 L 20 8.764 Z"
                />
              </svg>
            )
        }
    },
    {
        path: '/explore',
        title: 'Keşfet',
        icon: {
            active: (
                <svg 
                viewBox="0 0 24 24" 
                width={26.25} 
                height={26.25} 
                className="block"
                >
                   <path
                   fill="#fff"
                   d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z" />
                   </svg>
            ),
            pasive: (
                <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path 
                fill="#e7e9ea"
                d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
              </svg>
            )
        }
    },
    {
        path: '/notifications',
        title: 'Bildirimler',
        notification: 2,
        icon: {
            active: (
                <svg 
                viewBox="0 0 24 24" 
                width={26.25} 
                height={26.25} 
                className="block"
                >
                   <path
                   fill="#fff"
                   d="M 11.996 2 c -4.062 0 -7.49 3.021 -7.999 7.051 L 2.866 18 H 7.1 c 0.463 2.282 2.481 4 4.9 4 s 4.437 -1.718 4.9 -4 h 4.236 l -1.143 -8.958 C 19.48 5.017 16.054 2 11.996 2 Z M 9.171 18 h 5.658 c -0.412 1.165 -1.523 2 -2.829 2 s -2.417 -0.835 -2.829 -2 Z" />
                   </svg>
            ),
            pasive : (
                <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path 
                fill="#e7e9ea"
                d="M 19.993 9.042 C 19.48 5.017 16.054 2 11.996 2 s -7.49 3.021 -7.999 7.051 L 2.866 18 H 7.1 c 0.463 2.282 2.481 4 4.9 4 s 4.437 -1.718 4.9 -4 h 4.236 l -1.143 -8.958 Z M 12 20 c -1.306 0 -2.417 -0.835 -2.829 -2 h 5.658 c -0.412 1.165 -1.523 2 -2.829 2 Z m -6.866 -4 l 0.847 -6.698 C 6.364 6.272 8.941 4 11.996 4 s 5.627 2.268 6.013 5.295 L 18.864 16 H 5.134 Z" />
              </svg>
            )
        }
    },
    {
        path: '/messages',
        title: 'Mesajlar',
        icon: {
            active: (
                <svg 
                viewBox="0 0 24 24" 
                width={26.25} 
                height={26.25} 
                className="block"
                >
                   <path
                   fill="#fff"
                   d="M 1.998 4.499 c 0 -0.828 0.671 -1.499 1.5 -1.499 h 17 c 0.828 0 1.5 0.671 1.5 1.499 v 2.858 l -10 4.545 l -10 -4.547 V 4.499 Z m 0 5.053 V 19.5 c 0 0.828 0.671 1.5 1.5 1.5 h 17 c 0.828 0 1.5 -0.672 1.5 -1.5 V 9.554 l -10 4.545 l -10 -4.547 Z" />
                   </svg>
            ),
            pasive : (
                <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path 
                fill="#e7e9ea"
                d="M 1.998 5.5 c 0 -1.381 1.119 -2.5 2.5 -2.5 h 15 c 1.381 0 2.5 1.119 2.5 2.5 v 13 c 0 1.381 -1.119 2.5 -2.5 2.5 h -15 c -1.381 0 -2.5 -1.119 -2.5 -2.5 v -13 Z m 2.5 -0.5 c -0.276 0 -0.5 0.224 -0.5 0.5 v 2.764 l 8 3.638 l 8 -3.636 V 5.5 c 0 -0.276 -0.224 -0.5 -0.5 -0.5 h -15 Z m 15.5 5.463 l -8 3.636 l -8 -3.638 V 18.5 c 0 0.276 0.224 0.5 0.5 0.5 h 15 c 0.276 0 0.5 -0.224 0.5 -0.5 v -8.037 Z" />
              </svg>
            )
        }
    },
    {
        path: '/lists',
        title: 'Listeler',
        icon: {
            active: (
                <svg 
                viewBox="0 0 24 24" 
                width={26.25} 
                height={26.25} 
                className="block"
                >
                   <path
                   fill="#fff"
                   d="M 18.5 2 h -13 C 4.12 2 3 3.12 3 4.5 v 15 C 3 20.88 4.12 22 5.5 22 h 13 c 1.38 0 2.5 -1.12 2.5 -2.5 v -15 C 21 3.12 19.88 2 18.5 2 Z M 16 14 H 8 v -2 h 8 v 2 Z m 0 -4 H 8 V 8 h 8 v 2 Z" />
                   </svg>
            ),
            pasive : (
                <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path 
                fill="#e7e9ea"
                d="M 3 4.5 C 3 3.12 4.12 2 5.5 2 h 13 C 19.88 2 21 3.12 21 4.5 v 15 c 0 1.38 -1.12 2.5 -2.5 2.5 h -13 C 4.12 22 3 20.88 3 19.5 v -15 Z M 5.5 4 c -0.28 0 -0.5 0.22 -0.5 0.5 v 15 c 0 0.28 0.22 0.5 0.5 0.5 h 13 c 0.28 0 0.5 -0.22 0.5 -0.5 v -15 c 0 -0.28 -0.22 -0.5 -0.5 -0.5 h -13 Z M 16 10 H 8 V 8 h 8 v 2 Z m -8 2 h 8 v 2 H 8 v -2 Z" />
              </svg>
            )
        }
    },
    {
        path: '/bookmarks',
        title: 'Yer İşaretleri',
        icon: {
            active: (
                <svg 
                viewBox="0 0 24 24" 
                width={26.25} 
                height={26.25} 
                className="block"
                >
                   <path
                   fill="#fff"
                   d="M 4 4.5 C 4 3.12 5.119 2 6.5 2 h 11 C 18.881 2 20 3.12 20 4.5 v 18.44 l -8 -5.71 l -8 5.71 V 4.5 Z" />
                   </svg>
            ),
            pasive : (
                <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path 
                fill="#e7e9ea"
                d="M 4 4.5 C 4 3.12 5.119 2 6.5 2 h 11 C 18.881 2 20 3.12 20 4.5 v 18.44 l -8 -5.71 l -8 5.71 V 4.5 Z M 6.5 4 c -0.276 0 -0.5 0.22 -0.5 0.5 v 14.56 l 6 -4.29 l 6 4.29 V 4.5 c 0 -0.28 -0.224 -0.5 -0.5 -0.5 h -11 Z" />
              </svg>
            )
        }
    },
    {
        path: '/premium',
        title: 'Onaylanmış',
        icon: {
            active: (
                <svg 
                viewBox="0 0 24 24" 
                width={26.25} 
                height={26.25} 
                className="block"
                >
                   <path
                   fill="#fff"
                   d="M 18.244 2.25 h 3.308 l -7.227 8.26 l 8.502 11.24 H 16.17 l -5.214 -6.817 L 4.99 21.75 H 1.68 l 7.73 -8.835 L 1.254 2.25 H 8.08 l 4.713 6.231 Z m -1.161 17.52 h 1.833 L 7.084 4.126 H 5.117 Z" />
                   </svg>
            ),
            pasive : (
                <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path 
                fill="#e7e9ea"
                d="M 18.244 2.25 h 3.308 l -7.227 8.26 l 8.502 11.24 H 16.17 l -5.214 -6.817 L 4.99 21.75 H 1.68 l 7.73 -8.835 L 1.254 2.25 H 8.08 l 4.713 6.231 Z m -1.161 17.52 h 1.833 L 7.084 4.126 H 5.117 Z" />
              </svg>
            )
        }
    },
    {
        path: '/profile',
        title: 'Profil',
        icon: {
            active: (
                <svg 
                viewBox="0 0 24 24" 
                width={26.25} 
                height={26.25} 
                className="block"
                >
                   <path
                   fill="#fff"
                   d="M 17.863 13.44 c 1.477 1.58 2.366 3.8 2.632 6.46 l 0.11 1.1 H 3.395 l 0.11 -1.1 c 0.266 -2.66 1.155 -4.88 2.632 -6.46 C 7.627 11.85 9.648 11 12 11 s 4.373 0.85 5.863 2.44 Z M 12 2 C 9.791 2 8 3.79 8 6 s 1.791 4 4 4 s 4 -1.79 4 -4 s -1.791 -4 -4 -4 Z" />
                   </svg>
            ),
            pasive : (
                <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path 
                fill="#e7e9ea"
                d="M 5.651 19 h 12.698 c -0.337 -1.8 -1.023 -3.21 -1.945 -4.19 C 15.318 13.65 13.838 13 12 13 s -3.317 0.65 -4.404 1.81 c -0.922 0.98 -1.608 2.39 -1.945 4.19 Z m 0.486 -5.56 C 7.627 11.85 9.648 11 12 11 s 4.373 0.85 5.863 2.44 c 1.477 1.58 2.366 3.8 2.632 6.46 l 0.11 1.1 H 3.395 l 0.11 -1.1 c 0.266 -2.66 1.155 -4.88 2.632 -6.46 Z M 12 4 c -1.105 0 -2 0.9 -2 2 s 0.895 2 2 2 s 2 -0.9 2 -2 s -0.895 -2 -2 -2 Z M 8 6 c 0 -2.21 1.791 -4 4 -4 s 4 1.79 4 4 s -1.791 4 -4 4 s -4 -1.79 -4 -4 Z" />
              </svg>
            )
        }
    },
    
]
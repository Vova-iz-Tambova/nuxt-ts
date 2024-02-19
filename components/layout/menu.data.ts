interface IMenuItem {
  name: string
  url: string
  icon: string
}

export const MENU: IMenuItem[] = [
  {
name: 'Home',
icon: 'radix-icons:dashboard',
url: '/',
  },
  {
name: 'Products',
icon: 'icon-park-twotone:mall-bag',
url: '/products',
  },
  {
name: 'Payments',
icon: 'quill:creditcard',
url: '/payments',
  },
  {
name: 'Orders',
icon: 'icon-park-outline:transaction-order',
url: '/orders',
  },
  {
name: 'Customers',
icon: 'streamline:information-desk-customer',
url: '/customers',
  },
  {
name: 'Feedback',
icon: 'mynaui:chat-dots',
url: '/feedback',
  },
  {
name: 'Settings',
icon: 'ci:settings',
url: '/settings',
  },
  {
name: 'Help center',
icon: 'material-symbols:help-outline',
url: '/help',
  },
]
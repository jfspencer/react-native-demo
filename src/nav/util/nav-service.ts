import { NavigationActions } from 'react-navigation';
let _navRef: Navigation<any>

export const setNavRef = (newRef: any) => {
    _navRef = newRef;
}

export function navigate(routeName: string) {
    _navRef.dispatch(NavigationActions.navigate({ routeName }));
}
import { NavigationActions } from 'react-navigation';
let _navigator: Navigation<any>

export const setTopLevelNavigator = (newRef: any) => {
    _navigator = newRef;
}

export function navigate(routeName: string) {
    _navigator.dispatch(NavigationActions.navigate({ routeName }));
}
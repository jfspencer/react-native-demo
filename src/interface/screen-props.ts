type RouteName =
    'InventoryList' | 'InventoryDetail' |
    'OrderList' | 'OrderDetail' |
    'ProductList' | 'ProductDetail'

interface Navigation<StateParams> {
    navigation: {
        state: {
            params: StateParams
        }
        navigate: (route: RouteName, param?: any) => void
        push: (route: RouteName, param?: any) => void
        replace: (route: RouteName, param?: any) => void
    }
}
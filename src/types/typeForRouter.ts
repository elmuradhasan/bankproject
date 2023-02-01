export interface RouteType {
    path: string
    showMenu?: boolean
    component: React.LazyExoticComponent<() => JSX.Element>
}

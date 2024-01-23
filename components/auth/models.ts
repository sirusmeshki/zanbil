export type HeaderProps = {
    title: string
    subTitle: string
}

export type SeperatorProps = {
    label?: string
}

export type CardWrapperProps = {
    children: React.ReactNode
    title: string
    subTitle: string
    backButtonLabel: string
    backButtonTitle: string
    backButtonUrl: string
}

export type AlertProps = {
    description: string
}

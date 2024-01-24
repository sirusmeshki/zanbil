import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertProps } from '@/components/auth/models'

const AlertError: React.FC<AlertProps> = ({ description }) => {
    if (!description) return null

    return (
        <Alert variant={'destructive'}>
            <AlertTriangle width={18} height={18} />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </Alert>
    )
}

export default AlertError

import { CheckCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertProps } from '@/components/auth/models'

const AlertSuccess: React.FC<AlertProps> = ({ description }) => {
    return (
        <Alert variant={'success'}>
            <CheckCircle width={18} height={18} />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </Alert>
    )
}

export default AlertSuccess

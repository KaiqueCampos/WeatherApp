type ConditionProps = string

type IconProps = {
    name: string,
    color: string
}

export function climateConditions(condition: ConditionProps) {
    let icon = {}

    switch (condition) {
        case 'storm':
            return icon = {
                name: 'thunderstorm-outline',
                color: '#00008b'
            };
            break

        case 'cloudly_day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#ffb300'
            };
            break

        case 'clear_day':
            return icon = {
                name: 'sunny-outline',
                color: '#ffb300'
            }

        case 'rain':
            return icon = {
                name: 'rainy-outline',
                color: '#1ec9ff'
            };
            break

        default:
            return icon = {
                name: 'cloud-outline',
                color: '#A0A0A0'
            }
    }
}
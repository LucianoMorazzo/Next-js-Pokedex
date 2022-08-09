import { Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {

    const { theme } = useTheme();
    return (
        <div
            style={{
                display: 'flex',
                width: '100vw',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                backgroundColor: theme?.colors.secondary
            }}
        >
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>
        </div>
    )
}
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react"
const IndexPage = () => {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
            <Heading mb={6}>Hola Mundo</Heading>
            <Input placeholder="correo@email.com" variant="filled" mb={3} type="email" />
            <Input placeholder="********" variant="filled" mb={6} type="password" />
            <Button mb={6} colorScheme="teal">Iniciar Sesión</Button>
            <Button onClick={toggleColorMode}>Cambiar a Modo Oscuro</Button>
        </Flex>
    </Flex>
)
}

export default IndexPage;
import {
    Flex,
    Wrap,
    Button,
    Text,
    useColorModeValue,
    VStack,
    HStack,
    Link,
    Box,
    Image,
    Heading,
    Center,
    Badge,
    Select,
    IconButton,
    //isOpen and onClose are for modal
    useDisclosure,
    //modal
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
Step,
StepDescription,
StepIcon,
StepIndicator,
StepNumber,
StepSeparator,
StepStatus,
StepTitle,
Stepper,
useSteps,
Stack,
Lorem
} from "@chakra-ui/react";

const UserManualStep = ({index}) => {
    const steps = [
        { title: 'First', description: 'Type the source code' },
        { title: 'Second', description: 'Start up test' },
        { title: 'Third', description: 'Config the parameters of deployment' },
        { title: 'Fourth', description: 'Deploy the smart contracts' },
      ]
      const { activeStep, setActiveStep } = useSteps({
        index: index,
        count: steps.length,
      })
    
      const activeStepText = steps[activeStep].description
    return (
        <Stack>
        <Stepper size='sm' index={activeStep} gap='0'>
          {steps.map((step, index) => (
            <Step key={index} gap='0'>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <StepSeparator _horizontal={{ ml: '0' }} />
            </Step>
          ))}
        </Stepper>
        <Text>
          Step {activeStep + 1}: <b>{activeStepText}</b>
        </Text>
      </Stack>
    )
}

export default UserManualStep;
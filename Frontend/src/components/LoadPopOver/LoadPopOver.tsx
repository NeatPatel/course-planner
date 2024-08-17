import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react'
import { useState } from 'react';

const SERVER = 'https://course-planner-dl32.onrender.com';
export default function LoadPopOver({ addedCourses, setAddedCourses }: any) {
    const [passCode, setPasscode] = useState<string>(""); // unique key to access saved course list
    const [isLoading, setIsLoading] = useState<boolean>(false); // used to control loading animation of button

    async function handleLoad() {
        setIsLoading(true);

        const promise = await fetch(`${SERVER}/load-schedule-db`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: passCode
            })
        })

        const data = await promise.json();

        const scheduleData = data.data.scheduleA;
        for (let i = 0; i < scheduleData.length; i++) {
            for (let j = 0; j < scheduleData[i].length; j++) {
                scheduleData[i][j] = { id: scheduleData[i][j], children: scheduleData[i][j] }
            }
        }

        const addedCoursesCopy = { ...addedCourses };

        // override addedCourses state variable with the courseMatrix returned from the endpoint

        let index = 0;
        for (const quarterKey of Object.keys(addedCoursesCopy).sort()) {
            if (index > scheduleData.length - 1) break;
            addedCoursesCopy[quarterKey] = scheduleData[index]
            index += 1

        }
        setAddedCourses(addedCoursesCopy);
        setIsLoading(false)
    }

    return (
        <Popover closeOnBlur={true}>
            <PopoverTrigger>
                <Button className='settingButton'> Load </Button>

            </PopoverTrigger>

            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton margin="0px 0px" />
                <PopoverHeader><b>Load Schedule</b> </PopoverHeader>
                <PopoverBody>
                    Enter passcode to load your schedule.
                    <InputGroup marginTop="1em">
                        <Input placeholder="Passcode" width="50%" onChange={(e) => setPasscode(e.target.value)} />
                        <InputRightAddon padding={"0px 0px"}>
                            <Button type="submit" marginTop="2px" width="100%" height="110%" borderTopLeftRadius="0px"
                                borderBottomLeftRadius="0px" backgroundColor='#0a74ed;' color="white"
                                onClick={handleLoad} isLoading={isLoading}>Submit</Button></InputRightAddon>
                    </InputGroup>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}


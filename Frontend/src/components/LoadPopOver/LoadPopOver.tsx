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
    const [passCode, setPasscode] = useState<string>("");

    async function handleLoad() {

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
        // console.log('saved schedule data: ');
        // console.log(data);

        const scheduleData = data.data.scheduleA;
        for (let i = 0; i < scheduleData.length; i++) {
            for (let j = 0; j < scheduleData[i].length; j++) {
                scheduleData[i][j] = { id: scheduleData[i][j], children: scheduleData[i][j] }
            }
        }

        // console.log('added courses: ', addedCourses);
        const addedCoursesCopy = { ...addedCourses };

        let index = 0;
        for (const quarterKey of Object.keys(addedCoursesCopy).sort()) {
            if (index > scheduleData.length - 1) break;
            addedCoursesCopy[quarterKey] = scheduleData[index]
            index += 1

        }

        // console.log('new added course copy: ')
        // console.log(addedCoursesCopy);

        setAddedCourses(addedCoursesCopy);
    }

    return (
        <Popover closeOnBlur={true}>
            <PopoverTrigger>
                <button className="settingButton"
                    onClick={() => {
                    }}> Load </button>

            </PopoverTrigger>

            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton margin="0px 0px" />
                <PopoverHeader><b>Load Schedule</b> </PopoverHeader>
                <PopoverBody>
                    Enter passcode to load your schedule.
                    <InputGroup marginTop="1em">
                        <Input placeholder="Passcode" width="50%" onChange={(e) => setPasscode(e.target.value)} />
                        <InputRightAddon padding={"0px 0px"}> <Button marginTop="2px" width="100%" height="110%" borderTopLeftRadius="0px"
                            borderBottomLeftRadius="0px" backgroundColor='#0a74ed;' color="white"
                            onClick={handleLoad}>Submit</Button></InputRightAddon>
                    </InputGroup>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}


import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const ClubRoomContent = () => {
    const AmitiesBg = {
        background: '#cab17b'
    }

    return (
        <>
            <Container className='p-md-0 p-2 text-center'>
                <Col className='d-flex flex-column align-items-center '>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>CLUB ROOM, BENGALURU</h6>
                    <p>
                        Offering a plethora of amenities with all comforts suited to pamper you to the hilt, the club room suites in Bengaluru, Zuri are an experience like none other. Keeping your business and leisure requirements in mind, the club room is equipped with everything you’ll require during your stay with us.
                    </p>

                    <p>
                        Note: The guests can Check-in at 1:00PM and Check-out at 11:00AM based on the duration of their stay.
                    </p>
                    <p>
                        Please note:Early check-in and check-out is subject to room availability.
                        <br />
                        Complimentary early check-in and check-out available for I-Prefer members.
                    </p>
                </Col>

                <Col className='my-5 py-5' style={AmitiesBg}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>AMENITIES</h6>

                    <p className='text-black'>
                        International direct dialling | Complimentary WI-FI for upto two devices | In-room safes and data ports |
                        <br />
                        Complimentary breakfast | Mini bar (Services on request and chargeable) | Hair dryer | 29″ LCD television |
                        <br />
                        Tea and coffee maker | Daily newspaper – The Times of India / The Economic Times | Magazines – Tehelka /
                        <br />
                        India Today | Iron and ironing board (on request) | DVD Player (on request) | 24-Hour
                        <br />
                        room service | 24 Hour Coffee Shop | Iron and Ironing Board on request | Baby Cot on request | Writing Table | Bathtub | Coffee/Tea
                        <br />
                        Amenities | Concierge services
                    </p>
                    <Link
                        href="https://be.synxis.com/?_ga=2.56530732.62180047.1693482265-2038087003.1664255723&_gac=1.161572430.1690453396.CjwKCAjwq4imBhBQEiwA9Nx1Bi6aiGcfgk-uDDRypiK5UqXgtik--oBXV3gga2OF4WXNJFxRCRxuCRoCl0wQAvD_BwE&adult=1&arrive=2023-09-02&chain=17869&child=0&currency=INR&depart=2023-09-03&hotel=64786&level=hotel&locale=en-US&rooms=1"
                        target='_blank'
                        className='text-decoration-none'
                    >
                        <p className='text-white d-inline-block px-3 py-2 bg-purple'>
                            Book Now
                        </p>
                    </Link>
                </Col>
            </Container>
        </>
    )
}

export default ClubRoomContent
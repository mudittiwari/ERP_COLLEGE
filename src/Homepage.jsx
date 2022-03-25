import React from "react";
import topimage from '../src/assets/topimage.png';
import placementdrive from '../src/assets/placementdrive.png';
import placements from '../src/assets/placements.png';
import mous from '../src/assets/mous.png';
import intern from '../src/assets/intern.png';
import alumini from '../src/assets/alumini.png';
import student_data from '../src/assets/student_data.png';
import visits from '../src/assets/visits.png';
import adone from '../src/assets/adone.png';
import adtwo from '../src/assets/adtwo.png';
import adthree from '../src/assets/adthree.png';
import adfour from '../src/assets/adfour.png';
import govt from '../src/assets/govt.png';
import arrow from '../src/assets/arrow.png';
import '../src/homepage.css';
function Homepage() {
    return (
        <>
            <div className="w-full">
                <div className="w-full h-20 flex items-center px-10" style={{ 'backgroundColor': '#2E86C1' }}>
                    <div className="w-44 flex flex-col items-center" style={{ 'borderLeft': '2px solid #FF944A' }}>
                        <h1 className="text-white">1200+</h1>
                        <h1 className="text-white">Students Placed</h1>
                    </div>
                    <div className="w-44 flex flex-col items-center" style={{ 'borderLeft': '2px solid #FF944A' }}>
                        <h1 className="text-white">6</h1>
                        <h1 className="text-white">Departments</h1>
                    </div>
                    <div className="w-44 flex flex-col items-center" style={{ 'borderLeft': '2px solid #FF944A' }}>
                        <h1 className="text-white">8</h1>
                        <h1 className="text-white">Total Courses</h1>
                    </div>
                </div>
                <div className="w-full my-10 px-6 flex items-center">
                    <div className="w-1/2 flex justify-center">
                        <img className="w-4/5" src={topimage} alt="" />
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <h1 className="text-5xl" style={{ 'fontFamily': 'Poly' }}>WELCOME TO</h1>
                        <h1 className="text-5xl" style={{ 'fontFamily': 'Poly' }}>MITRC ERP</h1>
                        <h1 className="text-5xl" style={{ 'fontFamily': 'Poly' }}>PORTAL</h1>
                    </div>
                </div>
                <div className="px-10 w-full">
                    <div className="w-full h-max px-10 py-5" style={{ 'backgroundColor': '#E3EBFD', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                        <h1 className="text-xl font-bold" style={{ 'color': '#4A4A4A', 'fontFamily': 'Montserrat' }}>ABOUT ERP</h1>
                        <div className="w-80 my-3" style={{ 'height': '1px', 'backgroundColor': 'rgba(255, 148, 74, 0.6)' }}></div>
                        <p className="text-sm my-3 font-bold" style={{ 'fontFamily': 'Roboto' }}>
                            MITRC ERP  is a cloud based educational ERP is Web Based Application which integrates all the modules and functionalities of college system on a single system that can be handled by the administrative head and access by the students and faculties with valid user id and password.</p>
                        <p className="text-sm my-3 font-bold" style={{ 'fontFamily': 'Roboto' }}>
                            It manage attendance, performance report, admissions, events, examination, transportation, and more & simplify the hassles of faculty.
                        </p>
                        <p className="text-sm my-3 font-bold" style={{ 'fontFamily': 'Roboto' }}>
                            MITRC ERP  is a cloud based educational ERP Web Based Application that enables the institute  to manage online admission, student enrollment, students’ attendance, online fees, grades, assignments, library books, etc. It can also generate online results, marksheet, students’ performance reports, etc.</p>
                        <p className="text-sm my-3 font-bold" style={{ 'fontFamily': 'Roboto' }}>
                            It  is an end-to-end solution for colleges to improve operational efficiency & institutional outcomes by automating Student-Faculty lifecycle and campus administration.</p>


                    </div>
                </div>




                <div className="w-full h-max px-20 py-5 my-10" style={{ 'backgroundColor': '#85C1E9' }}>
                    <h1 className="text-xl font-bold" style={{ 'color': '#4A4A4A', 'fontFamily': 'Montserrat' }}>ACADEMICS</h1>
                    <div className="w-36 my-3" style={{ 'height': '2px', 'backgroundColor': '#FF944A' }}></div>
                    <div className="w-100 flex justify-around mt-7">
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>MITRC CSE DEPARTMENT</span>
                        </div>
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>MITRC CE DEPARTMENT</span>
                        </div>
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>MITRC EE DEPARTMENT</span>
                        </div>
                    </div>
                    <div className="w-100 flex justify-around mt-7">
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>MITRC ME DEPARTMENT</span>
                        </div>
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>MITRC MBA DEPARTMENT</span>
                        </div>
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>DIRECTOR</span>
                        </div>
                    </div>
                    <div className="w-100 flex justify-around mt-7">
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>DEAN EXAM</span>
                        </div>
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>DEAN ACADEMICS</span>
                        </div>
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>DEAN STUDENT AFFAIRS</span>
                        </div>
                    </div>
                    <div className="w-100 flex justify-around mt-7 mb-3">
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>STUDENT SECTION</span>
                        </div>
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>ALUMINI</span>
                        </div>
                        <div className="w-1/4 bg-white py-2 px-2 rounded-xl text-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <span className="font-semibold" style={{ 'color': '#737373', 'fontSize': '13px' }}>PARENTS</span>
                        </div>
                    </div>
                </div>


                <div className="w-full h-max px-20 mb-6" style={{ 'position': 'relative' }}>
                    <h1 className="text-xl font-bold" style={{ 'color': '#4A4A4A', 'fontFamily': 'Montserrat' }}>HR DEPARTMENT</h1>
                    <div className="w-36 my-3" style={{ 'height': '2px', 'backgroundColor': '#FF944A' }}></div>
                    <div className="w-100 flex justify-center mt-6">
                        <div className="w-3/5 h-80 rounded-xl" style={{ 'backgroundColor': 'rgba(227, 235, 253, 1)', 'boxShadow': '0px 4px 4px 0px rgb(0 0 0 / 25%)' }}></div>
                    </div>
                    <div className="w-4/5 flex justify-around" style={{ 'position': 'absolute', 'top': '120px' }}>
                        <div className="w-1/4 py-10 flex flex-col items-center rounded-lg" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <h1 className="font-bold text-xs">TEACHING STAFF</h1>
                            <h1 className="font-bold text-xs">DETAILS</h1>
                        </div>
                        <div className="w-1/4 py-10 flex flex-col items-center rounded-lg" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <h1 className="font-bold text-xs">ADMIN STAFF</h1>
                            <h1 className="font-bold text-xs">DETAILS</h1>
                        </div>
                        <div className="w-1/4 py-10 flex flex-col items-center rounded-lg" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                            <h1 className="font-bold text-xs">STAFF</h1>
                            <h1 className="font-bold text-xs">ATTENDENCE</h1>
                        </div>
                    </div>
                </div>




                <div className="w-full h-max px-20 py-5 mt-10 mb-6" style={{ 'backgroundColor': '#85C1E9' }}>
                    <h1 className="text-xl font-bold" style={{ 'color': '#4A4A4A', 'fontFamily': 'Montserrat' }}>TRAINING AND PLACEMENT DEPARTMENT</h1>
                    <div className="w-36 my-3" style={{ 'height': '2px', 'backgroundColor': '#FF944A' }}></div>
                    <div className="flex justify-around my-10">
                        <div className="tpd w-1/4 bg-white h-44 flex flex-col items-center px-5 justify-evenly rounded-lg">
                            <div className="h-10 w-10 bg-red-700 flex justify-center items-center rounded-full px-2 py-2">
                                <img src={placementdrive} height="30px" width="30px" alt="" />
                            </div>
                            <h1 className="text-xs font-bold uppercase">Placement drive</h1>
                            <div className="arrow h-7 cursor-pointer w-7 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#F3F4F6' }}>
                                <img src={arrow} height="15px" width="15px" alt="" />
                            </div>
                        </div>


                        <div className="tpd w-1/4 bg-white h-44 flex flex-col items-center px-5 justify-evenly rounded-lg">
                            <div className="h-10 w-10 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#FF2D59' }}>
                                <img src={placements} height="30px" width="30px" alt="" />
                            </div>
                            <h1 className="text-xs font-bold uppercase">Placements</h1>
                            <div className="arrow h-7 cursor-pointer w-7 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#F3F4F6' }}>
                                <img src={arrow} height="15px" width="15px" alt="" />
                            </div>
                        </div>



                        <div className="tpd w-1/4 bg-white h-44 flex flex-col items-center px-5 justify-evenly rounded-lg">
                            <div className="h-10 w-10 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#4ADB61' }}>
                                <img src={mous} height="30px" width="30px" alt="" />
                            </div>
                            <h1 className="text-xs font-bold uppercase">Mous</h1>
                            <div className="arrow h-7 cursor-pointer w-7 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#F3F4F6' }}>
                                <img src={arrow} height="15px" width="15px" alt="" />
                            </div>
                        </div>
                    </div>



                    <div className="flex justify-around my-10">
                        <div className="tpd w-1/4 bg-white h-44 flex flex-col items-center px-5 justify-evenly rounded-lg">
                            <div className="h-10 w-10 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#FFCC00' }}>
                                <img src={govt} height="30px" width="30px" alt="" />
                            </div>
                            <h1 className="text-xs font-bold uppercase">govt. section</h1>
                            <div className="arrow h-7 cursor-pointer w-7 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#F3F4F6' }}>
                                <img src={arrow} height="15px" width="15px" alt="" />
                            </div>
                        </div>


                        <div className="tpd w-1/4 bg-white h-44 flex flex-col items-center px-5 justify-evenly rounded-lg">
                            <div className="h-10 w-10 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#007BFF' }}>
                                <img src={intern} height="30px" width="30px" alt="" />
                            </div>
                            <h1 className="text-xs font-bold uppercase">Internship</h1>
                            <div className="arrow h-7 cursor-pointer w-7 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#F3F4F6' }}>
                                <img src={arrow} height="15px" width="15px" alt="" />
                            </div>
                        </div>



                        <div className="tpd w-1/4 bg-white h-44 flex flex-col items-center px-5 justify-evenly rounded-lg">
                            <div className="h-10 w-10 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#FF6800' }}>
                                <img src={alumini} height="30px" width="30px" alt="" />
                            </div>
                            <h1 className="text-xs font-bold uppercase">alumini details</h1>
                            <div className="arrow h-7 cursor-pointer w-7 flex justify-center items-center rounded-full px-2 py-2" style={{ 'backgroundColor': '#F3F4F6' }}>
                                <img src={arrow} height="15px" width="15px" alt="" />
                            </div>
                        </div>
                    </div>
                </div>






                <div className="w-full h-max px-20 py-5" style={{ 'backgroundColor': 'white' }}>
                    <h1 className="text-xl font-bold" style={{ 'color': '#4A4A4A', 'fontFamily': 'Montserrat' }}>MARKETING DEPARTMENT</h1>
                    <div className="w-36 my-3" style={{ 'height': '2px', 'backgroundColor': '#FF944A' }}></div>
                    <div className="w-full mt-10">
                        <div className="flex justify-around">
                            <div className="flex w-max" >
                                <div className="w-24 rounded-l-xl h-24 flex justify-center items-center" style={{ 'backgroundColor': '#86C1E8', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                    <img src={student_data} width="50px" alt="" />
                                </div>
                                <div className="w-40 rounded-r-xl h-24 flex justify-center items-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                    <h1 className="font-bold text-xs">STUDENTS DATA</h1>
                                </div>
                            </div>
                            <div className="flex w-max" >
                                <div className="w-24 rounded-l-xl h-24 flex justify-center items-center" style={{ 'backgroundColor': '#86C1E8', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                    <img src={student_data} width="50px" alt="" />
                                </div>
                                <div className="w-40 rounded-r-xl h-24 flex justify-center items-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                    <h1 className="font-bold text-xs">SCHOOL DATA</h1>
                                </div>
                            </div>
                        </div>





                        <div className="flex justify-around mt-10" >
                            <div className="flex w-max" >
                                <div className="w-24 rounded-l-xl h-24 flex justify-center items-center" style={{ 'backgroundColor': '#86C1E8', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                    <img src={visits} width="50px" alt="" />
                                </div>
                                <div className="w-40 rounded-r-xl h-24 flex justify-center items-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                    <h1 className="font-bold text-xs">VISITS</h1>
                                </div>
                            </div>
                            <div className="flex w-max" >
                                <div className="w-24 rounded-l-xl h-24 flex justify-center items-center" style={{ 'backgroundColor': '#86C1E8', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                    <img src={student_data} width="50px" alt="" />
                                </div>
                                <div className="w-40 rounded-r-xl h-24 flex justify-center items-center" style={{ 'backgroundColor': 'white', 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                    <h1 className="font-bold text-xs">ADMISSIONS DETAILS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="w-full h-max px-20 py-5 mt-10 mb-6" style={{ 'backgroundColor': '#85C1E9' }}>
                    <h1 className="text-xl font-bold" style={{ 'color': '#4A4A4A', 'fontFamily': 'Montserrat' }}>EXAMINATION CELL</h1>
                    <div className="w-36 my-3" style={{ 'height': '2px', 'backgroundColor': '#FF944A' }}></div>
                    <div className="flex flex-col w-full mt-10">
                        <div className="w-full flex justify-center ">
                            <div className="w-44 h-12 mx-2 bg-white flex justify-center items-center rounded-3xl" style={{ 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                <h1 className="text-xs font-semibold" style={{ 'color': '#737373' }}>STUDENT RECORD</h1>
                            </div>
                            <div className="w-44 h-12 mx-2 bg-white flex justify-center items-center rounded-3xl" style={{ 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                <h1 className="text-xs font-semibold" style={{ 'color': '#737373' }}>SHEETS / COPIES</h1>
                            </div>
                        </div>
                        <div className="w-full flex justify-center my-6">
                            <div className="w-44 h-12 mx-2 bg-white flex justify-center items-center rounded-3xl" style={{ 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                <h1 className="text-xs font-semibold" style={{ 'color': '#737373' }}>MARKS</h1>
                            </div>
                            <div className="w-44 h-12 mx-2 bg-white flex justify-center items-center rounded-3xl" style={{ 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                <h1 className="text-xs font-semibold" style={{ 'color': '#737373' }}>DEGREE</h1>
                            </div>
                            <div className="w-44 h-12 mx-2 bg-white flex justify-center items-center rounded-3xl" style={{ 'boxShadow': '4px 4px 4px 0px rgb(0 0 0 / 25%)' }}>
                                <h1 className="text-xs font-semibold" style={{ 'color': '#737373' }}>SCHOLORSHIP</h1>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="w-full h-max px-20 py-5 mt-6 mb-6" style={{ 'backgroundColor': 'white' }}>
                    <h1 className="text-xl font-bold" style={{ 'color': '#4A4A4A', 'fontFamily': 'Montserrat' }}>ACCOUNTS DEPARTMENT</h1>
                    <div className="w-36 my-3" style={{ 'height': '2px', 'backgroundColor': '#FF944A' }}></div>
                    </div>
                    <div className="w-full flex justify-evenly mb-10">
                        <div className="w-36 flex justify-center items-center flex-col">
                            <img src={adone} width="20px" alt="" />
                            <h1 className="text-xs font-bold my-2">SALARY SHEET</h1>
                        </div>
                        <div className="w-36 flex justify-center items-center flex-col">
                            <img src={adone} width="20px" alt="" />
                            <h1 className="text-xs font-bold my-2">ADVANCE PAYMENT</h1>
                        </div>
                        <div className="w-36 flex justify-center items-center flex-col">
                            <img src={adone} width="20px" alt="" />
                            <h1 className="text-xs font-bold my-2">FEES</h1>
                        </div>
                    </div>

                    <div className="w-full flex justify-evenly mt-10">
                        <div className="w-36 flex justify-center items-center flex-col">
                            <img src={adfour} width="20px" alt="" />
                            <h1 className="text-xs font-bold my-2">EXAM DETAILS</h1>
                        </div>
                        <div className="w-36 flex justify-center items-center flex-col">
                            <img src={adtwo} width="20px" alt="" />
                            <h1 className="text-xs font-bold my-2">GST DETAILS</h1>
                        </div>
                        <div className="w-36 flex justify-center items-center flex-col">
                            <img src={adthree} width="20px" alt="" />
                            <h1 className="text-xs font-bold my-2">BOOKINGS</h1>
                        </div>
                    </div>

                    <div className="w-full flex justify-evenly mt-10">
                        <div className="w-36 flex justify-center items-center flex-col">
                            <img src={adfour} width="20px" alt="" />
                            <h1 className="text-xs font-bold my-2">BILLS</h1>
                        </div>
                        <div className="w-36 flex justify-center items-center flex-col">
                            <img src={adtwo} width="20px" alt="" />
                            <h1 className="text-xs font-bold my-2">ONLINE EXAM PAYMENT</h1>
                        </div>
                        <div className="w-36 justify-center items-center flex-col">
                            
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Homepage;
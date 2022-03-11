import React from "react";
import topimage from '../src/assets/topimage.png';

function Homepage() {
    return (
        <>
            <div className="w-100">
                <div className="w-100 h-20 flex items-center px-10" style={{ 'backgroundColor': '#2E86C1' }}>
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
                <div className="w-100 my-6 px-6 flex items-center">
                    <div className="w-3/5">
                        <img className="object-fill" src={topimage} alt="" />
                    </div>
                    <div className="w-3/5 flex flex-col justify-center items-center">
                        <h1 className="text-4xl" style={{ 'fontFamily': 'Poly' }}>WELCOME TO</h1>
                        <h1 className="text-4xl" style={{ 'fontFamily': 'Poly' }}>MITRC ERP</h1>
                        <h1 className="text-4xl" style={{ 'fontFamily': 'Poly' }}>PORTAL</h1>
                    </div>
                </div>
                <div className="w-100 mx-12 h-max px-10 py-5" style={{ 'backgroundColor': '#E3EBFD' }}>
                    <h1 className="text-xl font-bold" style={{ 'color': '#4A4A4A', 'fontFamily': 'Montserrat' }}>ABOUT ERP</h1>
                    <div className="w-80 my-3" style={{ 'height': '1px', 'backgroundColor': 'rgba(255, 148, 74, 0.6)' }}></div>
                    <p className="text-sm my-3 font-bold" style={{'fontFamily':'Roboto'}}>
                        MITRC ERP  is a cloud based educational ERP is Web Based Application which integrates all the modules and functionalities of college system on a single system that can be handled by the administrative head and access by the students and faculties with valid user id and password.</p>
                        <p className="text-sm my-3 font-bold" style={{'fontFamily':'Roboto'}}>
                        It manage attendance, performance report, admissions, events, examination, transportation, and more & simplify the hassles of faculty.
                        </p>
                        <p className="text-sm my-3 font-bold" style={{'fontFamily':'Roboto'}}>
                        MITRC ERP  is a cloud based educational ERP Web Based Application that enables the institute  to manage online admission, student enrollment, students’ attendance, online fees, grades, assignments, library books, etc. It can also generate online results, marksheet, students’ performance reports, etc.</p>
                        <p className="text-sm my-3 font-bold" style={{'fontFamily':'Roboto'}}>
                        It  is an end-to-end solution for colleges to improve operational efficiency & institutional outcomes by automating Student-Faculty lifecycle and campus administration.</p>

                    
                </div>
            </div>
        </>
    );
}

export default Homepage;
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DocLogin from './components/DocServices/DocLogin/DocLogin';
import PatLogin from './components/PatServices/PatLogin/PatLogin';
import Failure from './components/Failure';
import PatHome from './components/PatServices/PatHome/PatHome';
import Emergency from './components/PatServices/Emergency/Emergency';
import Prescriptions from './components/PatServices/Prescriptions/Prescriptions';
import FirstAid from './components/PatServices/FirstAid/FirstAid';
import DailyCheckup from './components/PatServices/DailyCheckUp/DailyCheckup';
import SignUp from './components/PatServices/SignUp/SignUp';
import DocSignUp from './components/DocServices/DocSignUp/DocSignUp';
import DocHome from './components/DocServices/HomePage/DocHome';
import PatientList from './components/DocServices/PatientsList/PatientList';
import BookAppointment from './components/PatServices/BookAppontment/BookAppointment';
import TimeSlot from './components/PatServices/BookAppontment/TimeSlot/TimeSlot';
import Appointment from './components/DocServices/Appointment/Appointment';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docLogin" element={<DocLogin />} />
          <Route path="/patientLogin" element={<PatLogin />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/docSignUp" element={<DocSignUp />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/success" element={<PatHome />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/dailyCheckup" element={<DailyCheckup />} />
          <Route path="/reportsAndMedicines" element={<Prescriptions />} />
          <Route path="/firstAid" element={<FirstAid />} />
          <Route path="/docHome" element={<DocHome />} />
          <Route path="/patientList" element={<PatientList />} />
          <Route
            path="/patientAppointmentBooking"
            element={<BookAppointment />}
          />
          <Route path="/timeSlot" element={<TimeSlot />} />
          <Route path="/doctorAppointment" element={<Appointment />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

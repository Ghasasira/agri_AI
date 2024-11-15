import karthik from "./img/karthik.png";
import abiram from "./img/abiram.jpeg";
import UserTile from "./userTile";
import TeamMates from "./teammates"

function Contact() {
  return (
    <>
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
            <h2 class="text-base font-bold text-indigo-600">
                We have the best equipment
            </h2>
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                Check our awesome team members
            </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TeamMates.map((e)=>(
          <UserTile name={e.name} role={e.role} github = {e.github} />
        ))} 
            
        </div>
    </section>
    </>
  );
}

export default Contact;

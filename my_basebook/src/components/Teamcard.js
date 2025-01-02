const TeamCard = ({ person }) => {

    if(person.image === null) {
      person.image = "https://via.placeholder.com/150";
    }
  
    return (
      <div className="w-full px-4 md:w-1/2 xl:w-1/4">
        <div className="mx-auto mb-10 w-full max-w-[370px]">
          <div className="relative overflow-hidden rounded-lg">
            <img
             src={person.image} 
             alt="employee"
         
             className="w-full"
          
            />
            <div className="absolute bottom-5 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
                <h3 className="text-base font-semibold text-dark dark:text-white">
               
                </h3>
                <p className="text-xs text-body-color dark:text-dark-6">
               
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export { TeamCard };
  
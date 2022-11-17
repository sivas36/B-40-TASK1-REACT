import logo from './logo.svg';
import './App.css';

function App() {
    const nameObj=[
      {name:'Siva',src:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"},
      {name:'kumar',src:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"},
      {name:'raj',src:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"}
    ]
  return (
         <div className="App">
          <section class="pricing py-5">
  <div class="container">
    <div class="row">
         <User type='FREE' price='0' />
         <User type='PLUS' price='9'/>
         <User type='PRO' price='49'/>
    </div>
    </div>
    </section>
   
          </div>
  );
}


function User({type,price}){
    return (


        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{type}</h5>
            <h6 className="card-price text-center">{`$${price}`}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li> 
              <li className={price==='0' && "text-muted"}> <span className="fa-li"><i className={`${price==='0'?'fas fa-times':""} ${price==='9'?'fas fa-check':""} ${price==='49'?'fas fa-check':""}`}></i></span>Unlimited
                Private Projects</li>
              <li className={price==='0' && "text-muted"}><span className="fa-li"><i className={`${price==='0'?'fas fa-times':""} ${price==='9'?'fas fa-check':""} ${price==='49'?'fas fa-check':""}`}></i></span>Dedicated
                Phone Support</li>
              <li className={price==='0' && "text-muted"}><span className="fa-li"><i className={`${price==='0'?'fas fa-times':""} ${price==='9'?'fas fa-check':""} ${price==='49'?'fas fa-check':""}`}></i></span>Free Subdomain
              </li>
              <li className={`${price==='0' || price==='9'?"text-muted":""}`}><span className="fa-li"><i className={`${price==='0'?'fas fa-times':""} ${price==='9'?'fas fa-times':""} ${price==='49'?'fas fa-check':""}`}></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
 


  );
}
export default App;



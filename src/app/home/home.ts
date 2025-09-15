import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  homeUrl = "https://tse4.mm.bing.net/th/id/OIP.4Tz7BUIi3XDMX1bnjh2PZgHaE7?w=800&h=533&rs=1&pid=ImgDetMain&o=7&rm=3"
  ownerUrl = "https://tse4.mm.bing.net/th/id/OIP.dteiu_wLfKb2_m5qAFYtQgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
  tenantUrl = "https://tse2.mm.bing.net/th/id/OIP.b6bx5Hapoc52ZvoB9X-UGgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  registerUrl = "https://tse4.mm.bing.net/th/id/OIP.KNEaS9FyeDCbk_D296WLRgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
  propertyUrl = "https://th.bing.com/th/id/R.7d2d4cf1ae43ec2568c1c382c1ed5855?rik=2HUXUsq3BAyaUg&riu=http%3a%2f%2fwww.overbeyrealty.com%2fwp-content%2fuploads%2f2014%2f09%2foriginal-1024x731.jpg&ehk=H1%2bDIJyxu5LS8A2T5GFG5HZEC0aBizCCSzYblwpeF3Y%3d&risl=&pid=ImgRaw&r=0"
  agreementUrl = "https://uploads-ssl.webflow.com/603dfae5ed7c980420ff37e4/6297566613f40518c409d5ff_types%20of%20lease.jpg"
  paymentsUrl = "https://www.creativefabrica.com/wp-content/uploads/2021/09/15/Money-finance-cash-payment-icon-Graphics-17346742-1.jpg"
}

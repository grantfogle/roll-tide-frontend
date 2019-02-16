import { Component } from '@angular/core';
import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('df43a3c5-fb14-4508-979a-83fa468f3c0c', 'mainnet');
const web3 = new Web3(portis.provider);

web3.eth.getAccounts((error, accounts) => {
  console.log(accounts);
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roll-tide';
}

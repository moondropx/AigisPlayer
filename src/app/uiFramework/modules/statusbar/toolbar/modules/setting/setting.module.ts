import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../../../../../../shared.module';
import { UIFrameStatusBarToolBarSettingComponent } from './setting.component';
import { SettingProxyComponent } from './components/proxy/proxy.component';
import { SettingUtilComponent } from './components/util/util.component';
import { SettingAccountComponent } from './components/account/account.component'
import { SettingMapComponent } from './components/map/map.component'

@NgModule({
    declarations: [
        UIFrameStatusBarToolBarSettingComponent,
        SettingProxyComponent,
        SettingUtilComponent,
        SettingAccountComponent,
        SettingMapComponent],
    imports: [SharedModule, ReactiveFormsModule],
    exports: [UIFrameStatusBarToolBarSettingComponent]
})
export class UIFrameStatusBarToolBarSettingModule {

}

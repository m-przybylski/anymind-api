import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AccountService } from './api/account.service';
import { AdminpanelService } from './api/adminpanel.service';
import { ConfigService } from './api/config.service';
import { EmploymentService } from './api/employment.service';
import { FilesService } from './api/files.service';
import { FinancesService } from './api/finances.service';
import { InvitationService } from './api/invitation.service';
import { PaymentsService } from './api/payments.service';
import { PayoutsService } from './api/payouts.service';
import { PresenceService } from './api/presence.service';
import { ProfileService } from './api/profile.service';
import { RatelService } from './api/ratel.service';
import { RecoverPasswordService } from './api/recoverPassword.service';
import { RegistrationService } from './api/registration.service';
import { SearchService } from './api/search.service';
import { ServiceService } from './api/service.service';
import { SessionService } from './api/session.service';
import { ViewsService } from './api/views.service';
import { WidgetService } from './api/widget.service';
import { WizardService } from './api/wizard.service';
import { WsService } from './api/ws.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AccountService,
    AdminpanelService,
    ConfigService,
    EmploymentService,
    FilesService,
    FinancesService,
    InvitationService,
    PaymentsService,
    PayoutsService,
    PresenceService,
    ProfileService,
    RatelService,
    RecoverPasswordService,
    RegistrationService,
    SearchService,
    ServiceService,
    SessionService,
    ViewsService,
    WidgetService,
    WizardService,
    WsService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}

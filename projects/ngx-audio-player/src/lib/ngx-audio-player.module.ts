import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatSliderModule, MatExpansionModule, MatFormFieldModule, MatTableModule, MatPaginatorModule
} from '@angular/material';
import { MatBasicAudioPlayerComponent } from './component/mat-basic-audio-player/mat-basic-audio-player.component';
import { AudioPlayerService } from './service/audio-player-service/audio-player.service';
import { CommonModule } from '@angular/common';
import { SecondsToMinutesPipe } from './pipe/seconds-to-minutes';
import { MatAdvancedAudioPlayerComponent } from './component/mat-advanced-audio-player/mat-advanced-audio-player.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faPlay, faPause, faSpinner, faStepForward, faStepBackward, faVolumeMute, faVolumeUp
} from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule,
    MatSliderModule, MatExpansionModule, MatPaginatorModule
  ]
})
export class MaterialModule { }

@NgModule({
  declarations: [MatBasicAudioPlayerComponent, SecondsToMinutesPipe, MatAdvancedAudioPlayerComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule, MaterialModule],
  exports: [MatBasicAudioPlayerComponent, MatAdvancedAudioPlayerComponent],
  providers: [AudioPlayerService]
})
export class NgxAudioPlayerModule {
  constructor(library: FaIconLibrary) {
    // Icons for User Favorite Page
    library.addIcons(faPlay)
    library.addIcons(faPause)
    library.addIcons(faSpinner)
    library.addIcons(faStepBackward)
    library.addIcons(faVolumeMute)
    library.addIcons(faVolumeUp)
  }
}

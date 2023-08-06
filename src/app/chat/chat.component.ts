import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RippleAnimationConfig } from '@angular/material/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  RippleAnimationConfing: RippleAnimationConfig = { enterDuration: 600, exitDuration: 500 };

  @ViewChild('scrollMe') private myScrollContainer: ElementRef | undefined;


  user: any
  write: string | undefined
  mensajes: any[] = []
  mensaje: {texto: any} | undefined 

  constructor() { }

  ngOnInit(): void {
  }


  cambiarEstadoUser(es: boolean) { }
  escribiendo() {

  }
  enviarMensaje() {

  }


  scrollToBottom(): void {
    try {
      this.myScrollContainer!.nativeElement.scrollTop = this.myScrollContainer!.nativeElement.scrollHeight;
    } catch (err) { }
  }
}

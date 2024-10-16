/**
 * DEPRECATED
 * All functionality has been moved to the form builder
 */
import { Component, OnInit } from "@angular/core";
import { AdaptersService } from "../../services/adapters.service";

@Component({
  selector: "app-form-test-page",
  templateUrl: "./form-test-page.component.html",
  styleUrls: ["./form-test-page.component.scss"],
})
export class FormTestPageComponent implements OnInit {
  adapters$;
  selectedAdapter;
  selectedForm;

  constructor(private readonly adapters: AdaptersService) {}

  ngOnInit() {
    this.adapters$ = this.adapters.adapters$;
  }
}

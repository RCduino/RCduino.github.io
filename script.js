 // Interactive demo functionality
        document.addEventListener('DOMContentLoaded', function () {
            // Throttle control
            const throttleControl = document.getElementById('throttleControl');
            const throttleValue = document.getElementById('throttleValue');

            throttleControl.addEventListener('input', function () {
                throttleValue.textContent = this.value + '%';
                updateTelemetry();
            });

            // Steering control
            const steeringControl = document.getElementById('steeringControl');
            const steeringValue = document.getElementById('steeringValue');

            steeringControl.addEventListener('input', function () {
                steeringValue.textContent = this.value + '%';
                updateTelemetry();
            });

            // Emergency button
            const emergencyBtn = document.getElementById('emergencyBtn');
            const resetBtn = document.getElementById('resetBtn');
            const safetyStatus = document.getElementById('safetyStatus');
            const statusIndicator = document.querySelector('#safetyStatus').previousElementSibling;

            emergencyBtn.addEventListener('click', function () {
                safetyStatus.textContent = 'EMERGENCY STOP';
                statusIndicator.className = 'status-indicator status-danger';
                updateTelemetry("Emergency stop activated!");
            });

            resetBtn.addEventListener('click', function () {
                safetyStatus.textContent = 'Normal';
                statusIndicator.className = 'status-indicator status-ok';
                updateTelemetry("System reset");
            });

            // Update telemetry output
            function updateTelemetry(customMessage) {
                const telemetryOutput = document.getElementById('telemetryOutput');
                const now = new Date();
                const timestamp = now.toLocaleTimeString();

                if (customMessage) {
                    telemetryOutput.innerHTML += `[${timestamp}] ${customMessage}\n`;
                } else {
                    telemetryOutput.innerHTML += `[${timestamp}] Throttle: ${throttleControl.value}%, Steering: ${steeringControl.value}%\n`;
                }

                // Auto-scroll
                telemetryOutput.scrollTop = telemetryOutput.scrollHeight;
            }

            // Simulate periodic telemetry updates
            setInterval(function () {
                if (safetyStatus.textContent === 'Normal') {
                    updateTelemetry();
                }
            }, 3000);
        });
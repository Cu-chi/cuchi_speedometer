local isHide = false
local carSpeed
local lightState
local handbrakeState

RegisterNetEvent("cuchi:displaySpeedometer")
AddEventHandler("cuchi:displaySpeedometer", function(display)
	Display(display)
end)

CreateThread(function()
	while true do
		Wait(50)
		local playerPed = PlayerPedId()

		if playerPed and IsPedInAnyVehicle(playerPed, true) and not isHide then
			local playerCar = GetVehiclePedIsIn(playerPed, false)
			if playerCar then
				local NcarSpeed = GetEntitySpeed(playerCar)
				local shouldUpdate = false

				if NcarSpeed ~= carSpeed then
					shouldUpdate = true
				end

				if shouldUpdate then
					carSpeed = NcarSpeed
					SendNUIMessage({
						ShowHud = true,
						CurrentCarKmh = carSpeed,
					})
				else
					Wait(250)
				end
			else
				SendNUIMessage({HideHud = true})
			end
		else
			SendNUIMessage({HideHud = true})
			Wait(250)
		end
	end
end)

CreateThread(function()
	while true do
		Wait(100)
		local playerPed = PlayerPedId()
		if IsPedInAnyVehicle(playerPed, false) then
			local veh = GetVehiclePedIsIn(playerPed,false)
			SendNUIMessage({
				fuel = GetVehicleFuelLevel(veh)
			})

			SendNUIMessage({
				engine = GetVehicleEngineHealth(veh)
			})

			local on = false
			local _, lightsOn, highbeamsOn = GetVehicleLightsState(veh)

			if lightsOn == 1 or highbeamsOn == 1 then
				on = true
			end

			if lightState ~= on then
				lightState = on

				SendNUIMessage({
					light = true,
					state = on
				})
			end

			local handbrake = GetVehicleHandbrake(veh) == 1
			if handbrakeState ~= handbrake then
				handbrakeState = handbrake

				SendNUIMessage({
					handbrake = true,
					state = handbrakeState
				})
			end
		else
			Wait(500)
		end
	end
end)

function Display(display)
	SendNUIMessage({HideHud = display})
	isHide = display
end

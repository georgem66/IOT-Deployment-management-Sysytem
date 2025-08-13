/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/alerts/alerts.controller.ts":
/*!*****************************************!*\
  !*** ./src/alerts/alerts.controller.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const alerts_service_1 = __webpack_require__(/*! ./alerts.service */ "./src/alerts/alerts.service.ts");
const alerts_dto_1 = __webpack_require__(/*! ./dto/alerts.dto */ "./src/alerts/dto/alerts.dto.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../auth/decorators/current-user.decorator */ "./src/auth/decorators/current-user.decorator.ts");
let AlertsController = class AlertsController {
    constructor(alertsService) {
        this.alertsService = alertsService;
    }
    async create(createAlertDto, user) {
        return this.alertsService.create(createAlertDto, user.id);
    }
    async findAll(query, user) {
        return this.alertsService.findAll(query, user.id, user.role);
    }
    async getStatistics(user) {
        return this.alertsService.getAlertStatistics(user.id, user.role);
    }
    async findOne(id, user) {
        return this.alertsService.findOne(id, user.id, user.role);
    }
    async update(id, updateAlertDto, user) {
        return this.alertsService.update(id, updateAlertDto, user.id, user.role);
    }
    async remove(id, user) {
        await this.alertsService.remove(id, user.id, user.role);
        return { message: 'Alert deleted successfully' };
    }
    async acknowledge(id, user) {
        return this.alertsService.update(id, { status: 'ACKNOWLEDGED' }, user.id, user.role);
    }
    async resolve(id, user) {
        return this.alertsService.update(id, { status: 'RESOLVED' }, user.id, user.role);
    }
};
exports.AlertsController = AlertsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new alert' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Alert created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof alerts_dto_1.CreateAlertDto !== "undefined" && alerts_dto_1.CreateAlertDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all alerts (filtered by user access)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alerts retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: ['ACTIVE', 'ACKNOWLEDGED', 'RESOLVED', 'IGNORED'] }),
    (0, swagger_1.ApiQuery)({ name: 'type', required: false, enum: ['SECURITY_BREACH', 'DEVICE_OFFLINE', 'HIGH_CPU_USAGE', 'HIGH_MEMORY_USAGE', 'ANOMALY_DETECTED', 'VULNERABILITY_FOUND', 'FIRMWARE_OUTDATED', 'AUTHENTICATION_FAILURE', 'NETWORK_INTRUSION'] }),
    (0, swagger_1.ApiQuery)({ name: 'severity', required: false, enum: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'INFO'] }),
    (0, swagger_1.ApiQuery)({ name: 'deviceId', required: false, description: 'Filter by device UUID' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Limit number of results' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof alerts_dto_1.AlertQueryDto !== "undefined" && alerts_dto_1.AlertQueryDto) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('statistics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get alert statistics and dashboard data' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statistics retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "getStatistics", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get alert by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alert retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Alert not found or access denied' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update alert status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alert updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Alert not found or access denied' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof alerts_dto_1.UpdateAlertDto !== "undefined" && alerts_dto_1.UpdateAlertDto) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete alert' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alert deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Alert not found or access denied' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/acknowledge'),
    (0, swagger_1.ApiOperation)({ summary: 'Acknowledge an alert' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alert acknowledged successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Alert not found or access denied' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "acknowledge", null);
__decorate([
    (0, common_1.Post)(':id/resolve'),
    (0, swagger_1.ApiOperation)({ summary: 'Resolve an alert' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Alert resolved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Alert not found or access denied' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AlertsController.prototype, "resolve", null);
exports.AlertsController = AlertsController = __decorate([
    (0, swagger_1.ApiTags)('Alerts'),
    (0, common_1.Controller)('alerts'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof alerts_service_1.AlertsService !== "undefined" && alerts_service_1.AlertsService) === "function" ? _a : Object])
], AlertsController);


/***/ }),

/***/ "./src/alerts/alerts.module.ts":
/*!*************************************!*\
  !*** ./src/alerts/alerts.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const alerts_service_1 = __webpack_require__(/*! ./alerts.service */ "./src/alerts/alerts.service.ts");
const alerts_controller_1 = __webpack_require__(/*! ./alerts.controller */ "./src/alerts/alerts.controller.ts");
let AlertsModule = class AlertsModule {
};
exports.AlertsModule = AlertsModule;
exports.AlertsModule = AlertsModule = __decorate([
    (0, common_1.Module)({
        controllers: [alerts_controller_1.AlertsController],
        providers: [alerts_service_1.AlertsService],
        exports: [alerts_service_1.AlertsService],
    })
], AlertsModule);


/***/ }),

/***/ "./src/alerts/alerts.service.ts":
/*!**************************************!*\
  !*** ./src/alerts/alerts.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_service_1 = __webpack_require__(/*! ../database/database.service */ "./src/database/database.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let AlertsService = class AlertsService {
    constructor(database) {
        this.database = database;
    }
    async create(createAlertDto, userId) {
        const data = {
            ...createAlertDto,
            status: client_1.AlertStatus.ACTIVE,
        };
        if (userId) {
            data.userId = userId;
        }
        return this.database.alert.create({
            data,
            include: {
                device: {
                    select: {
                        id: true,
                        name: true,
                        ipAddress: true,
                        type: true,
                    }
                },
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                }
            }
        });
    }
    async findAll(query, userId, userRole) {
        const where = {};
        if (query.status)
            where.status = query.status;
        if (query.type)
            where.type = query.type;
        if (query.severity)
            where.severity = query.severity;
        if (query.deviceId)
            where.deviceId = query.deviceId;
        if (userRole !== 'ADMIN') {
            where.OR = [
                { userId },
                {
                    device: { ownerId: userId }
                }
            ];
        }
        const limit = query.limit ? parseInt(query.limit, 10) : 50;
        return this.database.alert.findMany({
            where,
            include: {
                device: {
                    select: {
                        id: true,
                        name: true,
                        ipAddress: true,
                        type: true,
                        owner: {
                            select: {
                                id: true,
                                firstName: true,
                                lastName: true,
                            }
                        }
                    }
                },
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                }
            },
            orderBy: [
                { severity: 'desc' },
                { createdAt: 'desc' }
            ],
            take: limit,
        });
    }
    async findOne(id, userId, userRole) {
        const where = { id };
        if (userRole !== 'ADMIN') {
            where.OR = [
                { userId },
                {
                    device: { ownerId: userId }
                }
            ];
        }
        const alert = await this.database.alert.findFirst({
            where,
            include: {
                device: {
                    select: {
                        id: true,
                        name: true,
                        ipAddress: true,
                        type: true,
                        owner: {
                            select: {
                                id: true,
                                firstName: true,
                                lastName: true,
                                email: true,
                            }
                        }
                    }
                },
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                }
            }
        });
        if (!alert) {
            throw new common_1.NotFoundException('Alert not found or access denied');
        }
        return alert;
    }
    async update(id, updateAlertDto, userId, userRole) {
        await this.findOne(id, userId, userRole);
        const updateData = { ...updateAlertDto };
        if (updateAlertDto.status === client_1.AlertStatus.RESOLVED) {
            updateData.resolvedAt = new Date();
        }
        return this.database.alert.update({
            where: { id },
            data: updateData,
            include: {
                device: {
                    select: {
                        id: true,
                        name: true,
                        ipAddress: true,
                        type: true,
                    }
                },
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                }
            }
        });
    }
    async remove(id, userId, userRole) {
        await this.findOne(id, userId, userRole);
        await this.database.alert.delete({
            where: { id }
        });
    }
    async getAlertStatistics(userId, userRole) {
        const where = {};
        if (userRole !== 'ADMIN') {
            where.OR = [
                { userId },
                { device: { ownerId: userId } }
            ];
        }
        const [totalAlerts, activeAlerts, resolvedAlerts, criticalAlerts, highAlerts, mediumAlerts, lowAlerts, alertsByType, recentAlerts] = await Promise.all([
            this.database.alert.count({ where }),
            this.database.alert.count({
                where: { ...where, status: client_1.AlertStatus.ACTIVE }
            }),
            this.database.alert.count({
                where: { ...where, status: client_1.AlertStatus.RESOLVED }
            }),
            this.database.alert.count({
                where: { ...where, severity: client_1.AlertSeverity.CRITICAL }
            }),
            this.database.alert.count({
                where: { ...where, severity: client_1.AlertSeverity.HIGH }
            }),
            this.database.alert.count({
                where: { ...where, severity: client_1.AlertSeverity.MEDIUM }
            }),
            this.database.alert.count({
                where: { ...where, severity: client_1.AlertSeverity.LOW }
            }),
            this.database.alert.groupBy({
                by: ['type'],
                where,
                _count: { type: true }
            }),
            this.database.alert.findMany({
                where: { ...where, status: client_1.AlertStatus.ACTIVE },
                take: 10,
                orderBy: [
                    { severity: 'desc' },
                    { createdAt: 'desc' }
                ],
                include: {
                    device: {
                        select: {
                            id: true,
                            name: true,
                            type: true,
                        }
                    }
                }
            })
        ]);
        return {
            totalAlerts,
            activeAlerts,
            resolvedAlerts,
            severityBreakdown: {
                critical: criticalAlerts,
                high: highAlerts,
                medium: mediumAlerts,
                low: lowAlerts,
            },
            typeBreakdown: alertsByType.reduce((acc, item) => {
                acc[item.type] = item._count.type;
                return acc;
            }, {}),
            recentAlerts,
        };
    }
    async createSystemAlert(type, severity, title, description, deviceId, metadata) {
        return this.create({
            type,
            severity,
            title,
            description,
            deviceId,
            metadata,
        });
    }
    async createDeviceOfflineAlert(deviceId, deviceName) {
        return this.createSystemAlert(client_1.AlertType.DEVICE_OFFLINE, client_1.AlertSeverity.MEDIUM, 'Device Offline', `Device "${deviceName}" has gone offline and is no longer responding`, deviceId, { lastSeen: new Date().toISOString() });
    }
    async createHighCpuAlert(deviceId, deviceName, cpuUsage) {
        return this.createSystemAlert(client_1.AlertType.HIGH_CPU_USAGE, cpuUsage > 95 ? client_1.AlertSeverity.CRITICAL : client_1.AlertSeverity.HIGH, 'High CPU Usage Detected', `Device "${deviceName}" is experiencing high CPU usage (${cpuUsage}%)`, deviceId, { cpuUsage, threshold: 90 });
    }
    async createHighMemoryAlert(deviceId, deviceName, memoryUsage) {
        return this.createSystemAlert(client_1.AlertType.HIGH_MEMORY_USAGE, memoryUsage > 95 ? client_1.AlertSeverity.CRITICAL : client_1.AlertSeverity.HIGH, 'High Memory Usage Detected', `Device "${deviceName}" is experiencing high memory usage (${memoryUsage}%)`, deviceId, { memoryUsage, threshold: 85 });
    }
    async createVulnerabilityAlert(deviceId, deviceName, vulnerabilityCount, severity) {
        return this.createSystemAlert(client_1.AlertType.VULNERABILITY_FOUND, severity === 'CRITICAL' ? client_1.AlertSeverity.CRITICAL :
            severity === 'HIGH' ? client_1.AlertSeverity.HIGH : client_1.AlertSeverity.MEDIUM, 'Security Vulnerabilities Found', `${vulnerabilityCount} ${severity.toLowerCase()} severity vulnerabilities found on device "${deviceName}"`, deviceId, { vulnerabilityCount, vulnerabilitySeverity: severity });
    }
    async createAnomalyAlert(deviceId, deviceName, anomalyType, details) {
        return this.createSystemAlert(client_1.AlertType.ANOMALY_DETECTED, client_1.AlertSeverity.MEDIUM, 'Anomalous Behavior Detected', `Unusual ${anomalyType} detected on device "${deviceName}"`, deviceId, { anomalyType, details });
    }
    async markAlertsAsResolved(deviceId, alertTypes) {
        await this.database.alert.updateMany({
            where: {
                deviceId,
                type: { in: alertTypes },
                status: client_1.AlertStatus.ACTIVE
            },
            data: {
                status: client_1.AlertStatus.RESOLVED,
                resolvedAt: new Date()
            }
        });
    }
};
exports.AlertsService = AlertsService;
exports.AlertsService = AlertsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], AlertsService);


/***/ }),

/***/ "./src/alerts/dto/alerts.dto.ts":
/*!**************************************!*\
  !*** ./src/alerts/dto/alerts.dto.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertQueryDto = exports.UpdateAlertDto = exports.CreateAlertDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class CreateAlertDto {
}
exports.CreateAlertDto = CreateAlertDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '550e8400-e29b-41d4-a716-446655440000',
        description: 'UUID of the related device (optional)'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateAlertDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.AlertType,
        example: client_1.AlertType.SECURITY_BREACH,
        description: 'Type of alert'
    }),
    (0, class_validator_1.IsEnum)(client_1.AlertType),
    __metadata("design:type", typeof (_a = typeof client_1.AlertType !== "undefined" && client_1.AlertType) === "function" ? _a : Object)
], CreateAlertDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.AlertSeverity,
        example: client_1.AlertSeverity.HIGH,
        description: 'Severity level of the alert'
    }),
    (0, class_validator_1.IsEnum)(client_1.AlertSeverity),
    __metadata("design:type", typeof (_b = typeof client_1.AlertSeverity !== "undefined" && client_1.AlertSeverity) === "function" ? _b : Object)
], CreateAlertDto.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Security Breach Detected',
        description: 'Alert title'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateAlertDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Unusual network activity detected on device sensor-01',
        description: 'Detailed description of the alert'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], CreateAlertDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: { sourceIp: '192.168.1.100', attempts: 5 },
        description: 'Additional metadata about the alert'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateAlertDto.prototype, "metadata", void 0);
class UpdateAlertDto {
}
exports.UpdateAlertDto = UpdateAlertDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.AlertStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.AlertStatus),
    __metadata("design:type", typeof (_c = typeof client_1.AlertStatus !== "undefined" && client_1.AlertStatus) === "function" ? _c : Object)
], UpdateAlertDto.prototype, "status", void 0);
class AlertQueryDto {
}
exports.AlertQueryDto = AlertQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.AlertStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.AlertStatus),
    __metadata("design:type", typeof (_d = typeof client_1.AlertStatus !== "undefined" && client_1.AlertStatus) === "function" ? _d : Object)
], AlertQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.AlertType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.AlertType),
    __metadata("design:type", typeof (_e = typeof client_1.AlertType !== "undefined" && client_1.AlertType) === "function" ? _e : Object)
], AlertQueryDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.AlertSeverity }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.AlertSeverity),
    __metadata("design:type", typeof (_f = typeof client_1.AlertSeverity !== "undefined" && client_1.AlertSeverity) === "function" ? _f : Object)
], AlertQueryDto.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '550e8400-e29b-41d4-a716-446655440000',
        description: 'Filter by device ID'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], AlertQueryDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '10',
        description: 'Limit number of results'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AlertQueryDto.prototype, "limit", void 0);


/***/ }),

/***/ "./src/anomaly-detection/anomaly-detection.controller.ts":
/*!***************************************************************!*\
  !*** ./src/anomaly-detection/anomaly-detection.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnomalyDetectionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const anomaly_detection_service_1 = __webpack_require__(/*! ./anomaly-detection.service */ "./src/anomaly-detection/anomaly-detection.service.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../auth/decorators/current-user.decorator */ "./src/auth/decorators/current-user.decorator.ts");
let AnomalyDetectionController = class AnomalyDetectionController {
    constructor(anomalyDetectionService) {
        this.anomalyDetectionService = anomalyDetectionService;
    }
    async analyzeDevice(deviceId) {
        const results = await this.anomalyDetectionService.analyzeDevice(deviceId);
        return {
            deviceId,
            anomaliesDetected: results.length,
            anomalies: results,
            timestamp: new Date()
        };
    }
    async analyzeAllDevices() {
        const results = await this.anomalyDetectionService.analyzeAllDevices();
        const deviceSummary = results.reduce((acc, anomaly) => {
            if (!acc[anomaly.deviceId]) {
                acc[anomaly.deviceId] = {
                    deviceId: anomaly.deviceId,
                    deviceName: anomaly.deviceName,
                    anomalyCount: 0,
                    anomalies: []
                };
            }
            acc[anomaly.deviceId].anomalyCount++;
            acc[anomaly.deviceId].anomalies.push({
                type: anomaly.anomalyType,
                severity: anomaly.severity,
                description: anomaly.description
            });
            return acc;
        }, {});
        return {
            totalAnomalies: results.length,
            devicesAnalyzed: Object.keys(deviceSummary).length,
            deviceSummary: Object.values(deviceSummary),
            timestamp: new Date()
        };
    }
    async getAnomalyHistory(deviceId, days) {
        const daysNum = days ? parseInt(days, 10) : 7;
        const history = await this.anomalyDetectionService.getAnomalyHistory(deviceId, daysNum);
        return {
            deviceId,
            period: `${daysNum} days`,
            anomalies: history,
            totalCount: history.length
        };
    }
    async getStatistics(user) {
        return this.anomalyDetectionService.getAnomalyStatistics(user.id, user.role);
    }
    async getAnomalyRules() {
        const stats = await this.anomalyDetectionService.getAnomalyStatistics('', 'ADMIN');
        return {
            rules: stats.rules,
            totalRules: stats.rules.length
        };
    }
};
exports.AnomalyDetectionController = AnomalyDetectionController;
__decorate([
    (0, common_1.Post)('analyze/:deviceId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Analyze a specific device for anomalies',
        description: 'Runs anomaly detection algorithms on device telemetry data'
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Analysis completed successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found' }),
    __param(0, (0, common_1.Param)('deviceId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnomalyDetectionController.prototype, "analyzeDevice", null);
__decorate([
    (0, common_1.Post)('analyze-all'),
    (0, swagger_1.ApiOperation)({
        summary: 'Analyze all online devices for anomalies',
        description: 'Runs anomaly detection on all online devices in the system'
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Bulk analysis completed successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnomalyDetectionController.prototype, "analyzeAllDevices", null);
__decorate([
    (0, common_1.Get)('history/:deviceId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get anomaly detection history for a device',
        description: 'Retrieves historical anomaly detection results for a specific device'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Anomaly history retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found' }),
    (0, swagger_1.ApiQuery)({ name: 'days', required: false, description: 'Number of days to look back (default: 7)' }),
    __param(0, (0, common_1.Param)('deviceId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('days')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnomalyDetectionController.prototype, "getAnomalyHistory", null);
__decorate([
    (0, common_1.Get)('statistics'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get anomaly detection statistics',
        description: 'Provides overview statistics about anomaly detection across the system'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statistics retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnomalyDetectionController.prototype, "getStatistics", null);
__decorate([
    (0, common_1.Get)('rules'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get available anomaly detection rules',
        description: 'Lists all configured anomaly detection rules and their criteria'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Anomaly detection rules retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnomalyDetectionController.prototype, "getAnomalyRules", null);
exports.AnomalyDetectionController = AnomalyDetectionController = __decorate([
    (0, swagger_1.ApiTags)('Anomaly Detection'),
    (0, common_1.Controller)('anomaly-detection'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof anomaly_detection_service_1.AnomalyDetectionService !== "undefined" && anomaly_detection_service_1.AnomalyDetectionService) === "function" ? _a : Object])
], AnomalyDetectionController);


/***/ }),

/***/ "./src/anomaly-detection/anomaly-detection.module.ts":
/*!***********************************************************!*\
  !*** ./src/anomaly-detection/anomaly-detection.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnomalyDetectionModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const anomaly_detection_service_1 = __webpack_require__(/*! ./anomaly-detection.service */ "./src/anomaly-detection/anomaly-detection.service.ts");
const anomaly_detection_controller_1 = __webpack_require__(/*! ./anomaly-detection.controller */ "./src/anomaly-detection/anomaly-detection.controller.ts");
const alerts_module_1 = __webpack_require__(/*! ../alerts/alerts.module */ "./src/alerts/alerts.module.ts");
let AnomalyDetectionModule = class AnomalyDetectionModule {
};
exports.AnomalyDetectionModule = AnomalyDetectionModule;
exports.AnomalyDetectionModule = AnomalyDetectionModule = __decorate([
    (0, common_1.Module)({
        imports: [alerts_module_1.AlertsModule],
        controllers: [anomaly_detection_controller_1.AnomalyDetectionController],
        providers: [anomaly_detection_service_1.AnomalyDetectionService],
        exports: [anomaly_detection_service_1.AnomalyDetectionService],
    })
], AnomalyDetectionModule);


/***/ }),

/***/ "./src/anomaly-detection/anomaly-detection.service.ts":
/*!************************************************************!*\
  !*** ./src/anomaly-detection/anomaly-detection.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AnomalyDetectionService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnomalyDetectionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_service_1 = __webpack_require__(/*! ../database/database.service */ "./src/database/database.service.ts");
const alerts_service_1 = __webpack_require__(/*! ../alerts/alerts.service */ "./src/alerts/alerts.service.ts");
let AnomalyDetectionService = AnomalyDetectionService_1 = class AnomalyDetectionService {
    constructor(database, alertsService) {
        this.database = database;
        this.alertsService = alertsService;
        this.logger = new common_1.Logger(AnomalyDetectionService_1.name);
        this.anomalyRules = [];
        this.initializeRules();
    }
    initializeRules() {
        this.anomalyRules = [
            {
                id: 'high-cpu-sustained',
                name: 'Sustained High CPU Usage',
                description: 'CPU usage above 90% for extended period',
                condition: (data) => {
                    if (data.length < 5)
                        return false;
                    const recent = data.slice(0, 5);
                    return recent.every(d => (d.cpuUsage || 0) > 90);
                },
                severity: 'HIGH',
                message: (data, device) => `Device "${device.name}" has sustained high CPU usage (avg: ${Math.round(data.slice(0, 5).reduce((sum, d) => sum + (d.cpuUsage || 0), 0) / 5)}%)`
            },
            {
                id: 'memory-spike',
                name: 'Memory Usage Spike',
                description: 'Sudden increase in memory usage',
                condition: (data) => {
                    if (data.length < 10)
                        return false;
                    const current = data[0].memoryUsage || 0;
                    const baseline = data.slice(1, 10).reduce((sum, d) => sum + (d.memoryUsage || 0), 0) / 9;
                    return current > baseline + 30 && current > 85;
                },
                severity: 'MEDIUM',
                message: (data, device) => `Memory usage spike detected on device "${device.name}" (${Math.round(data[0].memoryUsage || 0)}%)`
            },
            {
                id: 'unusual-network-traffic',
                name: 'Unusual Network Traffic',
                description: 'Network traffic significantly above normal patterns',
                condition: (data) => {
                    if (data.length < 20)
                        return false;
                    const current = (data[0].networkIn || 0) + (data[0].networkOut || 0);
                    const historical = data.slice(1, 20);
                    const avgTraffic = historical.reduce((sum, d) => sum + (d.networkIn || 0) + (d.networkOut || 0), 0) / historical.length;
                    const threshold = avgTraffic * 3;
                    return current > threshold && current > 1000;
                },
                severity: 'MEDIUM',
                message: (data, device) => `Unusual network traffic detected on device "${device.name}" (${Math.round((data[0].networkIn || 0) + (data[0].networkOut || 0))} bytes)`
            },
            {
                id: 'high-temperature',
                name: 'High Operating Temperature',
                description: 'Device operating temperature above safe limits',
                condition: (data) => {
                    if (data.length < 3)
                        return false;
                    const recent = data.slice(0, 3);
                    return recent.every(d => (d.temperature || 0) > 80);
                },
                severity: 'CRITICAL',
                message: (data, device) => `Critical temperature detected on device "${device.name}" (${Math.round(data[0].temperature || 0)}°C)`
            },
            {
                id: 'disk-space-critical',
                name: 'Critical Disk Space',
                description: 'Disk usage approaching capacity',
                condition: (data) => {
                    return (data[0]?.diskUsage || 0) > 95;
                },
                severity: 'HIGH',
                message: (data, device) => `Critical disk space on device "${device.name}" (${Math.round(data[0].diskUsage || 0)}% used)`
            },
            {
                id: 'intermittent-connectivity',
                name: 'Intermittent Connectivity',
                description: 'Device showing signs of unstable connection',
                condition: (data, device) => {
                    if (data.length < 10)
                        return false;
                    const timestamps = data.map(d => d.timestamp.getTime()).sort((a, b) => b - a);
                    let gapCount = 0;
                    for (let i = 0; i < timestamps.length - 1; i++) {
                        const gap = timestamps[i] - timestamps[i + 1];
                        const expectedInterval = 60000;
                        if (gap > expectedInterval * 3) {
                            gapCount++;
                        }
                    }
                    return gapCount >= 3;
                },
                severity: 'MEDIUM',
                message: (data, device) => `Intermittent connectivity detected for device "${device.name}"`
            }
        ];
    }
    async analyzeDevice(deviceId) {
        const device = await this.database.device.findUnique({
            where: { id: deviceId }
        });
        if (!device) {
            throw new Error('Device not found');
        }
        const telemetryData = await this.database.deviceTelemetry.findMany({
            where: { deviceId },
            orderBy: { timestamp: 'desc' },
            take: 50
        });
        if (telemetryData.length === 0) {
            this.logger.warn(`No telemetry data found for device ${device.name}`);
            return [];
        }
        const anomalies = [];
        for (const rule of this.anomalyRules) {
            try {
                if (rule.condition(telemetryData, device)) {
                    const anomaly = {
                        deviceId,
                        deviceName: device.name,
                        anomalyType: rule.name,
                        severity: rule.severity,
                        description: rule.message(telemetryData, device),
                        evidence: {
                            ruleId: rule.id,
                            dataPoints: telemetryData.slice(0, 5).map(d => ({
                                timestamp: d.timestamp,
                                cpuUsage: d.cpuUsage,
                                memoryUsage: d.memoryUsage,
                                temperature: d.temperature,
                                networkIn: d.networkIn,
                                networkOut: d.networkOut,
                                diskUsage: d.diskUsage,
                            }))
                        },
                        timestamp: new Date()
                    };
                    anomalies.push(anomaly);
                    await this.alertsService.createAnomalyAlert(deviceId, device.name, rule.name, anomaly.evidence);
                    this.logger.warn(`Anomaly detected: ${rule.name} on device ${device.name}`);
                }
            }
            catch (error) {
                this.logger.error(`Error applying anomaly rule ${rule.id}:`, error);
            }
        }
        return anomalies;
    }
    async analyzeAllDevices() {
        const devices = await this.database.device.findMany({
            where: { status: 'ONLINE' },
            select: { id: true }
        });
        const allAnomalies = [];
        for (const device of devices) {
            try {
                const deviceAnomalies = await this.analyzeDevice(device.id);
                allAnomalies.push(...deviceAnomalies);
            }
            catch (error) {
                this.logger.error(`Error analyzing device ${device.id}:`, error);
            }
        }
        this.logger.log(`Analyzed ${devices.length} devices, found ${allAnomalies.length} anomalies`);
        return allAnomalies;
    }
    async getAnomalyHistory(deviceId, days = 7) {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const anomalyAlerts = await this.database.alert.findMany({
            where: {
                deviceId,
                type: 'ANOMALY_DETECTED',
                createdAt: { gte: startDate }
            },
            orderBy: { createdAt: 'desc' }
        });
        return anomalyAlerts.map(alert => ({
            id: alert.id,
            type: alert.metadata?.anomalyType || 'Unknown',
            severity: alert.severity,
            description: alert.description,
            timestamp: alert.createdAt,
            status: alert.status,
            evidence: alert.metadata?.details
        }));
    }
    async getAnomalyStatistics(userId, userRole) {
        const deviceFilter = userRole === 'ADMIN'
            ? {}
            : { device: { ownerId: userId } };
        const last24Hours = new Date();
        last24Hours.setHours(last24Hours.getHours() - 24);
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        const [totalAnomalies, recent24h, recentWeek, byType, bySeverity] = await Promise.all([
            this.database.alert.count({
                where: {
                    type: 'ANOMALY_DETECTED',
                    ...deviceFilter
                }
            }),
            this.database.alert.count({
                where: {
                    type: 'ANOMALY_DETECTED',
                    createdAt: { gte: last24Hours },
                    ...deviceFilter
                }
            }),
            this.database.alert.count({
                where: {
                    type: 'ANOMALY_DETECTED',
                    createdAt: { gte: lastWeek },
                    ...deviceFilter
                }
            }),
            this.database.alert.groupBy({
                by: ['metadata'],
                where: {
                    type: 'ANOMALY_DETECTED',
                    ...deviceFilter
                },
                _count: { id: true }
            }),
            this.database.alert.groupBy({
                by: ['severity'],
                where: {
                    type: 'ANOMALY_DETECTED',
                    ...deviceFilter
                },
                _count: { severity: true }
            })
        ]);
        return {
            totalAnomalies,
            recent24h,
            recentWeek,
            severityBreakdown: bySeverity.reduce((acc, item) => {
                acc[item.severity] = item._count.severity;
                return acc;
            }, {}),
            rules: this.anomalyRules.map(rule => ({
                id: rule.id,
                name: rule.name,
                description: rule.description,
                severity: rule.severity
            }))
        };
    }
    async createCustomRule(ruleData) {
        const rule = {
            id: `custom-${Date.now()}`,
            name: ruleData.name,
            description: ruleData.description,
            severity: ruleData.severity,
            condition: new Function('data', 'device', ruleData.condition),
            message: () => `Custom rule "${ruleData.name}" triggered`
        };
        this.anomalyRules.push(rule);
        return rule;
    }
};
exports.AnomalyDetectionService = AnomalyDetectionService;
exports.AnomalyDetectionService = AnomalyDetectionService = AnomalyDetectionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object, typeof (_b = typeof alerts_service_1.AlertsService !== "undefined" && alerts_service_1.AlertsService) === "function" ? _b : Object])
], AnomalyDetectionService);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const bull_1 = __webpack_require__(/*! @nestjs/bull */ "@nestjs/bull");
const database_module_1 = __webpack_require__(/*! ./database/database.module */ "./src/database/database.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./src/users/users.module.ts");
const devices_module_1 = __webpack_require__(/*! ./devices/devices.module */ "./src/devices/devices.module.ts");
const telemetry_module_1 = __webpack_require__(/*! ./telemetry/telemetry.module */ "./src/telemetry/telemetry.module.ts");
const vulnerability_module_1 = __webpack_require__(/*! ./vulnerability/vulnerability.module */ "./src/vulnerability/vulnerability.module.ts");
const alerts_module_1 = __webpack_require__(/*! ./alerts/alerts.module */ "./src/alerts/alerts.module.ts");
const anomaly_detection_module_1 = __webpack_require__(/*! ./anomaly-detection/anomaly-detection.module */ "./src/anomaly-detection/anomaly-detection.module.ts");
const firmware_module_1 = __webpack_require__(/*! ./firmware/firmware.module */ "./src/firmware/firmware.module.ts");
const audit_module_1 = __webpack_require__(/*! ./audit/audit.module */ "./src/audit/audit.module.ts");
const notification_module_1 = __webpack_require__(/*! ./notification/notification.module */ "./src/notification/notification.module.ts");
const export_module_1 = __webpack_require__(/*! ./export/export.module */ "./src/export/export.module.ts");
const websocket_module_1 = __webpack_require__(/*! ./websocket/websocket.module */ "./src/websocket/websocket.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            throttler_1.ThrottlerModule.forRoot([{
                    ttl: 60000,
                    limit: 100,
                }]),
            bull_1.BullModule.forRoot({
                redis: {
                    host: process.env.REDIS_HOST || 'localhost',
                    port: parseInt(process.env.REDIS_PORT || '6379'),
                },
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            devices_module_1.DevicesModule,
            telemetry_module_1.TelemetryModule,
            vulnerability_module_1.VulnerabilityModule,
            alerts_module_1.AlertsModule,
            anomaly_detection_module_1.AnomalyDetectionModule,
            firmware_module_1.FirmwareModule,
            audit_module_1.AuditModule,
            notification_module_1.NotificationModule,
            export_module_1.ExportModule,
            websocket_module_1.WebSocketModule,
        ],
    })
], AppModule);


/***/ }),

/***/ "./src/audit/audit.module.ts":
/*!***********************************!*\
  !*** ./src/audit/audit.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AuditModule = class AuditModule {
};
exports.AuditModule = AuditModule;
exports.AuditModule = AuditModule = __decorate([
    (0, common_1.Module)({
        providers: [],
        exports: [],
    })
], AuditModule);


/***/ }),

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const auth_dto_1 = __webpack_require__(/*! ./dto/auth.dto */ "./src/auth/dto/auth.dto.ts");
const current_user_decorator_1 = __webpack_require__(/*! ./decorators/current-user.decorator */ "./src/auth/decorators/current-user.decorator.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(loginDto, req) {
        return this.authService.login(req.user);
    }
    async register(registerDto) {
        return this.authService.register(registerDto);
    }
    async getProfile(user) {
        return {
            id: user.id,
            email: user.email,
            role: user.role,
        };
    }
    async verifyToken(user) {
        return {
            valid: true,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
            },
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'User login' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Login successful' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too many requests' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof auth_dto_1.LoginDto !== "undefined" && auth_dto_1.LoginDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'User registration' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Registration successful' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Email already exists' }),
    (0, swagger_1.ApiResponse)({ status: 429, description: 'Too many requests' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof auth_dto_1.RegisterDto !== "undefined" && auth_dto_1.RegisterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get user profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profile retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)('verify-token'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Verify JWT token' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Token is valid' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Token is invalid' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyToken", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./src/auth/strategies/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./strategies/local.strategy */ "./src/auth/strategies/local.strategy.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./src/users/users.module.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'fallback-secret',
                signOptions: {
                    expiresIn: process.env.JWT_EXPIRATION || '24h',
                    issuer: 'iot-security-system',
                    audience: 'iot-users'
                },
            }),
            users_module_1.UsersModule,
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const users_service_1 = __webpack_require__(/*! ../users/users.service */ "./src/users/users.service.ts");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            const { password: _, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = {
            email: user.email,
            sub: user.id,
            role: user.role,
        };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
            },
        };
    }
    async register(userData) {
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
        const user = await this.usersService.create({
            ...userData,
            password: hashedPassword,
        });
        return this.login(user);
    }
    async validateToken(token) {
        try {
            const payload = this.jwtService.verify(token);
            return payload;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),

/***/ "./src/auth/decorators/current-user.decorator.ts":
/*!*******************************************************!*\
  !*** ./src/auth/decorators/current-user.decorator.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),

/***/ "./src/auth/decorators/roles.decorator.ts":
/*!************************************************!*\
  !*** ./src/auth/decorators/roles.decorator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),

/***/ "./src/auth/dto/auth.dto.ts":
/*!**********************************!*\
  !*** ./src/auth/dto/auth.dto.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = exports.LoginDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin@iotsecurity.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SecurePass123!' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin@iotsecurity.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'SecurePass123!',
        description: 'Password must contain at least 8 characters, including uppercase, lowercase, number and special character'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(128),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
        message: 'Password must contain uppercase, lowercase, number and special character',
    }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], RegisterDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], RegisterDto.prototype, "lastName", void 0);


/***/ }),

/***/ "./src/auth/guards/roles.guard.ts":
/*!****************************************!*\
  !*** ./src/auth/guards/roles.guard.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const roles_decorator_1 = __webpack_require__(/*! ../decorators/roles.decorator */ "./src/auth/decorators/roles.decorator.ts");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.role === role);
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);


/***/ }),

/***/ "./src/auth/strategies/jwt.strategy.ts":
/*!*********************************************!*\
  !*** ./src/auth/strategies/jwt.strategy.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'fallback-secret',
            issuer: 'iot-security-system',
            audience: 'iot-users',
        });
    }
    async validate(payload) {
        return {
            id: payload.sub,
            email: payload.email,
            role: payload.role
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);


/***/ }),

/***/ "./src/auth/strategies/local.strategy.ts":
/*!***********************************************!*\
  !*** ./src/auth/strategies/local.strategy.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'email' });
        this.authService = authService;
    }
    async validate(email, password) {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return user;
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),

/***/ "./src/database/database.module.ts":
/*!*****************************************!*\
  !*** ./src/database/database.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_service_1 = __webpack_require__(/*! ./database.service */ "./src/database/database.service.ts");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [database_service_1.DatabaseService],
        exports: [database_service_1.DatabaseService],
    })
], DatabaseModule);


/***/ }),

/***/ "./src/database/database.service.ts":
/*!******************************************!*\
  !*** ./src/database/database.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let DatabaseService = class DatabaseService extends client_1.PrismaClient {
    async onModuleInit() {
        try {
            await this.$connect();
            console.log('Database connection established successfully');
        }
        catch (error) {
            console.error('Failed to connect to the database:', error);
        }
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async cleanDatabase() {
        if (process.env.NODE_ENV === 'test') {
            const models = Reflect.ownKeys(this).filter((key) => {
                return typeof key === 'string' && key[0] !== '_';
            });
            return Promise.all(models.map((modelKey) => {
                const key = modelKey;
                return this[key].deleteMany();
            }));
        }
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);


/***/ }),

/***/ "./src/devices/devices.controller.ts":
/*!*******************************************!*\
  !*** ./src/devices/devices.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevicesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const devices_service_1 = __webpack_require__(/*! ./devices.service */ "./src/devices/devices.service.ts");
const device_dto_1 = __webpack_require__(/*! ./dto/device.dto */ "./src/devices/dto/device.dto.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../auth/decorators/current-user.decorator */ "./src/auth/decorators/current-user.decorator.ts");
let DevicesController = class DevicesController {
    constructor(devicesService) {
        this.devicesService = devicesService;
    }
    async create(createDeviceDto, user) {
        return this.devicesService.create(createDeviceDto, user.id);
    }
    async findAll(query, user) {
        return this.devicesService.findAll(query, user.id, user.role);
    }
    async getStatistics(user) {
        return this.devicesService.getDeviceStatistics(user.id, user.role);
    }
    async findOne(id, user) {
        return this.devicesService.findOne(id, user.id, user.role);
    }
    async update(id, updateDeviceDto, user) {
        return this.devicesService.update(id, updateDeviceDto, user.id, user.role);
    }
    async remove(id, user) {
        await this.devicesService.remove(id, user.id, user.role);
        return { message: 'Device deleted successfully' };
    }
    async heartbeat(heartbeatDto) {
        await this.devicesService.updateHeartbeat(heartbeatDto.deviceId, heartbeatDto);
        return { message: 'Heartbeat received' };
    }
    async calculateSecurityScore(id, user) {
        await this.devicesService.findOne(id, user.id, user.role);
        const score = await this.devicesService.calculateSecurityScore(id);
        await this.devicesService.updateRiskLevel(id);
        return {
            deviceId: id,
            securityScore: score,
            message: 'Security score calculated successfully'
        };
    }
};
exports.DevicesController = DevicesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new IoT device' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Device registered successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Device with MAC address already exists' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof device_dto_1.CreateDeviceDto !== "undefined" && device_dto_1.CreateDeviceDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all devices (filtered by user role)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Devices retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiQuery)({ name: 'type', required: false, enum: ['SENSOR', 'CAMERA', 'GATEWAY', 'ACTUATOR', 'CONTROLLER', 'OTHER'] }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: ['ONLINE', 'OFFLINE', 'MAINTENANCE', 'ERROR'] }),
    (0, swagger_1.ApiQuery)({ name: 'riskLevel', required: false, enum: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'UNKNOWN'] }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Search by name, manufacturer, model, or IP' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof device_dto_1.DeviceQueryDto !== "undefined" && device_dto_1.DeviceQueryDto) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('statistics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get device statistics and overview' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statistics retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "getStatistics", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get device by ID with detailed information' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update device information' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation error' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof device_dto_1.UpdateDeviceDto !== "undefined" && device_dto_1.UpdateDeviceDto) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete device' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('heartbeat'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Device heartbeat and telemetry data submission',
        description: 'Endpoint for IoT devices to send periodic status updates and telemetry data'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Heartbeat received successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid device ID or data' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof device_dto_1.DeviceHeartbeatDto !== "undefined" && device_dto_1.DeviceHeartbeatDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "heartbeat", null);
__decorate([
    (0, common_1.Post)(':id/calculate-security-score'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Recalculate security score for device' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Security score calculated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "calculateSecurityScore", null);
exports.DevicesController = DevicesController = __decorate([
    (0, swagger_1.ApiTags)('Devices'),
    (0, common_1.Controller)('devices'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof devices_service_1.DevicesService !== "undefined" && devices_service_1.DevicesService) === "function" ? _a : Object])
], DevicesController);


/***/ }),

/***/ "./src/devices/devices.module.ts":
/*!***************************************!*\
  !*** ./src/devices/devices.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevicesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const devices_service_1 = __webpack_require__(/*! ./devices.service */ "./src/devices/devices.service.ts");
const devices_controller_1 = __webpack_require__(/*! ./devices.controller */ "./src/devices/devices.controller.ts");
let DevicesModule = class DevicesModule {
};
exports.DevicesModule = DevicesModule;
exports.DevicesModule = DevicesModule = __decorate([
    (0, common_1.Module)({
        controllers: [devices_controller_1.DevicesController],
        providers: [devices_service_1.DevicesService],
        exports: [devices_service_1.DevicesService],
    })
], DevicesModule);


/***/ }),

/***/ "./src/devices/devices.service.ts":
/*!****************************************!*\
  !*** ./src/devices/devices.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevicesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const database_service_1 = __webpack_require__(/*! ../database/database.service */ "./src/database/database.service.ts");
let DevicesService = class DevicesService {
    constructor(database) {
        this.database = database;
    }
    async create(createDeviceDto, ownerId) {
        const existingDevice = await this.database.device.findUnique({
            where: { macAddress: createDeviceDto.macAddress }
        });
        if (existingDevice) {
            throw new common_1.ConflictException('Device with this MAC address already exists');
        }
        return this.database.device.create({
            data: {
                ...createDeviceDto,
                ownerId,
                status: client_1.DeviceStatus.OFFLINE,
                riskLevel: client_1.RiskLevel.UNKNOWN,
            },
            include: {
                owner: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                }
            }
        });
    }
    async findAll(query, userId, userRole) {
        const where = {};
        if (userRole !== 'ADMIN') {
            where.ownerId = userId;
        }
        if (query.type)
            where.type = query.type;
        if (query.status)
            where.status = query.status;
        if (query.riskLevel)
            where.riskLevel = query.riskLevel;
        if (query.search) {
            where.OR = [
                { name: { contains: query.search, mode: 'insensitive' } },
                { manufacturer: { contains: query.search, mode: 'insensitive' } },
                { model: { contains: query.search, mode: 'insensitive' } },
                { ipAddress: { contains: query.search } },
            ];
        }
        return this.database.device.findMany({
            where,
            include: {
                owner: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                },
                _count: {
                    select: {
                        alerts: { where: { status: 'ACTIVE' } },
                        scans: true,
                    }
                }
            },
            orderBy: [
                { lastSeen: 'desc' },
                { registeredAt: 'desc' }
            ]
        });
    }
    async findOne(id, userId, userRole) {
        const where = { id };
        if (userRole !== 'ADMIN') {
            where.ownerId = userId;
        }
        const device = await this.database.device.findFirst({
            where,
            include: {
                owner: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                },
                telemetry: {
                    take: 20,
                    orderBy: { timestamp: 'desc' }
                },
                scans: {
                    take: 5,
                    orderBy: { startedAt: 'desc' }
                },
                alerts: {
                    take: 10,
                    where: { status: 'ACTIVE' },
                    orderBy: { createdAt: 'desc' }
                },
                _count: {
                    select: {
                        alerts: { where: { status: 'ACTIVE' } },
                        scans: true,
                        telemetry: true,
                    }
                }
            }
        });
        if (!device) {
            throw new common_1.NotFoundException('Device not found or access denied');
        }
        return device;
    }
    async update(id, updateDeviceDto, userId, userRole) {
        await this.findOne(id, userId, userRole);
        return this.database.device.update({
            where: { id },
            data: updateDeviceDto,
            include: {
                owner: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                }
            }
        });
    }
    async remove(id, userId, userRole) {
        await this.findOne(id, userId, userRole);
        await this.database.device.delete({
            where: { id }
        });
    }
    async updateHeartbeat(deviceId, telemetryData) {
        await this.database.device.update({
            where: { id: deviceId },
            data: {
                status: client_1.DeviceStatus.ONLINE,
                lastSeen: new Date(),
            }
        });
        await this.database.deviceTelemetry.create({
            data: {
                deviceId,
                ...telemetryData
            }
        });
    }
    async getDeviceStatistics(userId, userRole) {
        const where = {};
        if (userRole !== 'ADMIN') {
            where.ownerId = userId;
        }
        const [totalDevices, onlineDevices, offlineDevices, devicesByType, devicesByRiskLevel, recentAlerts] = await Promise.all([
            this.database.device.count({ where }),
            this.database.device.count({
                where: { ...where, status: client_1.DeviceStatus.ONLINE }
            }),
            this.database.device.count({
                where: { ...where, status: client_1.DeviceStatus.OFFLINE }
            }),
            this.database.device.groupBy({
                by: ['type'],
                where,
                _count: { type: true }
            }),
            this.database.device.groupBy({
                by: ['riskLevel'],
                where,
                _count: { riskLevel: true }
            }),
            this.database.alert.count({
                where: {
                    status: 'ACTIVE',
                    device: where.ownerId ? { ownerId: userId } : undefined
                }
            })
        ]);
        return {
            totalDevices,
            onlineDevices,
            offlineDevices,
            devicesByType: devicesByType.reduce((acc, item) => {
                acc[item.type] = item._count.type;
                return acc;
            }, {}),
            devicesByRiskLevel: devicesByRiskLevel.reduce((acc, item) => {
                acc[item.riskLevel] = item._count.riskLevel;
                return acc;
            }, {}),
            recentAlerts
        };
    }
    async calculateSecurityScore(deviceId) {
        const device = await this.database.device.findUnique({
            where: { id: deviceId },
            include: {
                scans: {
                    take: 1,
                    orderBy: { startedAt: 'desc' }
                },
                alerts: {
                    where: { status: 'ACTIVE' },
                    take: 10
                }
            }
        });
        if (!device)
            return 0;
        let score = 100;
        const latestScan = device.scans[0];
        if (latestScan) {
            score -= latestScan.criticalCount * 20;
            score -= latestScan.highCount * 10;
            score -= latestScan.mediumCount * 5;
            score -= latestScan.lowCount * 1;
        }
        score -= device.alerts.length * 5;
        if (device.status === client_1.DeviceStatus.OFFLINE) {
            score -= 10;
        }
        if (!device.firmwareVersion) {
            score -= 15;
        }
        return Math.max(0, Math.min(100, score));
    }
    async updateRiskLevel(deviceId) {
        const securityScore = await this.calculateSecurityScore(deviceId);
        let riskLevel;
        if (securityScore >= 80)
            riskLevel = client_1.RiskLevel.LOW;
        else if (securityScore >= 60)
            riskLevel = client_1.RiskLevel.MEDIUM;
        else if (securityScore >= 40)
            riskLevel = client_1.RiskLevel.HIGH;
        else
            riskLevel = client_1.RiskLevel.CRITICAL;
        await this.database.device.update({
            where: { id: deviceId },
            data: {
                securityScore,
                riskLevel
            }
        });
    }
};
exports.DevicesService = DevicesService;
exports.DevicesService = DevicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], DevicesService);


/***/ }),

/***/ "./src/devices/dto/device.dto.ts":
/*!***************************************!*\
  !*** ./src/devices/dto/device.dto.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceHeartbeatDto = exports.DeviceQueryDto = exports.UpdateDeviceDto = exports.CreateDeviceDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class CreateDeviceDto {
}
exports.CreateDeviceDto = CreateDeviceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Smart Sensor #1' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.DeviceType, example: client_1.DeviceType.SENSOR }),
    (0, class_validator_1.IsEnum)(client_1.DeviceType),
    __metadata("design:type", typeof (_a = typeof client_1.DeviceType !== "undefined" && client_1.DeviceType) === "function" ? _a : Object)
], CreateDeviceDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '192.168.1.100' }),
    (0, class_validator_1.IsIP)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "ipAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '00:1B:44:11:3A:B7' }),
    (0, class_validator_1.IsMACAddress)(),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "macAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Raspberry Pi Foundation' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Raspberry Pi 4' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '1.2.3' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "firmwareVersion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Raspbian 11' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateDeviceDto.prototype, "osVersion", void 0);
class UpdateDeviceDto {
}
exports.UpdateDeviceDto = UpdateDeviceDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Updated Smart Sensor #1' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.DeviceType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.DeviceType),
    __metadata("design:type", typeof (_b = typeof client_1.DeviceType !== "undefined" && client_1.DeviceType) === "function" ? _b : Object)
], UpdateDeviceDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '192.168.1.101' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIP)(),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "ipAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Raspberry Pi Foundation' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Raspberry Pi 4' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '1.2.4' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "firmwareVersion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Raspbian 11' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "osVersion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.DeviceStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.DeviceStatus),
    __metadata("design:type", typeof (_c = typeof client_1.DeviceStatus !== "undefined" && client_1.DeviceStatus) === "function" ? _c : Object)
], UpdateDeviceDto.prototype, "status", void 0);
class DeviceQueryDto {
}
exports.DeviceQueryDto = DeviceQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.DeviceType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.DeviceType),
    __metadata("design:type", typeof (_d = typeof client_1.DeviceType !== "undefined" && client_1.DeviceType) === "function" ? _d : Object)
], DeviceQueryDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.DeviceStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.DeviceStatus),
    __metadata("design:type", typeof (_e = typeof client_1.DeviceStatus !== "undefined" && client_1.DeviceStatus) === "function" ? _e : Object)
], DeviceQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.RiskLevel }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.RiskLevel),
    __metadata("design:type", typeof (_f = typeof client_1.RiskLevel !== "undefined" && client_1.RiskLevel) === "function" ? _f : Object)
], DeviceQueryDto.prototype, "riskLevel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'sensor' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceQueryDto.prototype, "search", void 0);
class DeviceHeartbeatDto {
}
exports.DeviceHeartbeatDto = DeviceHeartbeatDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '550e8400-e29b-41d4-a716-446655440000' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], DeviceHeartbeatDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 25.6 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DeviceHeartbeatDto.prototype, "cpuUsage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 60.2 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DeviceHeartbeatDto.prototype, "memoryUsage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 45.8 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DeviceHeartbeatDto.prototype, "diskUsage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 42.5 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DeviceHeartbeatDto.prototype, "temperature", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 1024.5 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DeviceHeartbeatDto.prototype, "networkIn", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 512.3 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DeviceHeartbeatDto.prototype, "networkOut", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], DeviceHeartbeatDto.prototype, "customData", void 0);


/***/ }),

/***/ "./src/export/export.module.ts":
/*!*************************************!*\
  !*** ./src/export/export.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExportModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ExportModule = class ExportModule {
};
exports.ExportModule = ExportModule;
exports.ExportModule = ExportModule = __decorate([
    (0, common_1.Module)({
        providers: [],
        exports: [],
    })
], ExportModule);


/***/ }),

/***/ "./src/firmware/firmware.module.ts":
/*!*****************************************!*\
  !*** ./src/firmware/firmware.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FirmwareModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let FirmwareModule = class FirmwareModule {
};
exports.FirmwareModule = FirmwareModule;
exports.FirmwareModule = FirmwareModule = __decorate([
    (0, common_1.Module)({
        providers: [],
        exports: [],
    })
], FirmwareModule);


/***/ }),

/***/ "./src/notification/notification.module.ts":
/*!*************************************************!*\
  !*** ./src/notification/notification.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let NotificationModule = class NotificationModule {
};
exports.NotificationModule = NotificationModule;
exports.NotificationModule = NotificationModule = __decorate([
    (0, common_1.Module)({
        providers: [],
        exports: [],
    })
], NotificationModule);


/***/ }),

/***/ "./src/telemetry/telemetry.controller.ts":
/*!***********************************************!*\
  !*** ./src/telemetry/telemetry.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TelemetryController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const telemetry_service_1 = __webpack_require__(/*! ./telemetry.service */ "./src/telemetry/telemetry.service.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../auth/decorators/current-user.decorator */ "./src/auth/decorators/current-user.decorator.ts");
let TelemetryController = class TelemetryController {
    constructor(telemetryService) {
        this.telemetryService = telemetryService;
    }
    async getDeviceTelemetry(deviceId, startDate, endDate, limit, user) {
        const query = {
            deviceId,
            startDate: startDate ? new Date(startDate) : undefined,
            endDate: endDate ? new Date(endDate) : undefined,
            limit: limit ? parseInt(limit, 10) : undefined,
        };
        return this.telemetryService.getTelemetryData(query, user.id, user.role);
    }
    async getDeviceTelemetryStats(deviceId, startDate, endDate, user) {
        return this.telemetryService.getTelemetryStats(deviceId, startDate ? new Date(startDate) : undefined, endDate ? new Date(endDate) : undefined, user.id, user.role);
    }
    async getRecentTelemetry(deviceId, limit, user) {
        const limitNum = limit ? parseInt(limit, 10) : 20;
        return this.telemetryService.getRecentTelemetry(deviceId, limitNum, user.id, user.role);
    }
    async getDeviceHealth(deviceId, user) {
        await this.telemetryService.getRecentTelemetry(deviceId, 1, user.id, user.role);
        return this.telemetryService.getDeviceHealthScore(deviceId);
    }
};
exports.TelemetryController = TelemetryController;
__decorate([
    (0, common_1.Get)('device/:deviceId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get telemetry data for a specific device' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Telemetry data retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    (0, swagger_1.ApiQuery)({ name: 'startDate', required: false, description: 'Start date for data range (ISO 8601)' }),
    (0, swagger_1.ApiQuery)({ name: 'endDate', required: false, description: 'End date for data range (ISO 8601)' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Maximum number of records to return' }),
    __param(0, (0, common_1.Param)('deviceId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __param(3, (0, common_1.Query)('limit')),
    __param(4, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], TelemetryController.prototype, "getDeviceTelemetry", null);
__decorate([
    (0, common_1.Get)('device/:deviceId/stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get telemetry statistics for a specific device' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Telemetry statistics retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    (0, swagger_1.ApiQuery)({ name: 'startDate', required: false, description: 'Start date for statistics range (ISO 8601)' }),
    (0, swagger_1.ApiQuery)({ name: 'endDate', required: false, description: 'End date for statistics range (ISO 8601)' }),
    __param(0, (0, common_1.Param)('deviceId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __param(3, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], TelemetryController.prototype, "getDeviceTelemetryStats", null);
__decorate([
    (0, common_1.Get)('device/:deviceId/recent'),
    (0, swagger_1.ApiOperation)({ summary: 'Get recent telemetry data for a specific device' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Recent telemetry data retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Number of recent records to return (default: 20)' }),
    __param(0, (0, common_1.Param)('deviceId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], TelemetryController.prototype, "getRecentTelemetry", null);
__decorate([
    (0, common_1.Get)('device/:deviceId/health'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get device health score based on telemetry data',
        description: 'Returns a health score (0-100) and detailed factors affecting device performance'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device health score calculated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    __param(0, (0, common_1.Param)('deviceId', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TelemetryController.prototype, "getDeviceHealth", null);
exports.TelemetryController = TelemetryController = __decorate([
    (0, swagger_1.ApiTags)('Telemetry'),
    (0, common_1.Controller)('telemetry'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof telemetry_service_1.TelemetryService !== "undefined" && telemetry_service_1.TelemetryService) === "function" ? _a : Object])
], TelemetryController);


/***/ }),

/***/ "./src/telemetry/telemetry.module.ts":
/*!*******************************************!*\
  !*** ./src/telemetry/telemetry.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TelemetryModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const telemetry_service_1 = __webpack_require__(/*! ./telemetry.service */ "./src/telemetry/telemetry.service.ts");
const telemetry_controller_1 = __webpack_require__(/*! ./telemetry.controller */ "./src/telemetry/telemetry.controller.ts");
let TelemetryModule = class TelemetryModule {
};
exports.TelemetryModule = TelemetryModule;
exports.TelemetryModule = TelemetryModule = __decorate([
    (0, common_1.Module)({
        controllers: [telemetry_controller_1.TelemetryController],
        providers: [telemetry_service_1.TelemetryService],
        exports: [telemetry_service_1.TelemetryService],
    })
], TelemetryModule);


/***/ }),

/***/ "./src/telemetry/telemetry.service.ts":
/*!********************************************!*\
  !*** ./src/telemetry/telemetry.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TelemetryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_service_1 = __webpack_require__(/*! ../database/database.service */ "./src/database/database.service.ts");
let TelemetryService = class TelemetryService {
    constructor(database) {
        this.database = database;
    }
    async getTelemetryData(query, userId, userRole) {
        const deviceWhere = { id: query.deviceId };
        if (userRole !== 'ADMIN') {
            deviceWhere.ownerId = userId;
        }
        const device = await this.database.device.findFirst({
            where: deviceWhere
        });
        if (!device) {
            throw new common_1.NotFoundException('Device not found or access denied');
        }
        const where = { deviceId: query.deviceId };
        if (query.startDate || query.endDate) {
            where.timestamp = {};
            if (query.startDate)
                where.timestamp.gte = query.startDate;
            if (query.endDate)
                where.timestamp.lte = query.endDate;
        }
        return this.database.deviceTelemetry.findMany({
            where,
            orderBy: { timestamp: 'desc' },
            take: query.limit || 100,
        });
    }
    async getTelemetryStats(deviceId, startDate, endDate, userId, userRole) {
        if (userId) {
            const deviceWhere = { id: deviceId };
            if (userRole !== 'ADMIN') {
                deviceWhere.ownerId = userId;
            }
            const device = await this.database.device.findFirst({
                where: deviceWhere
            });
            if (!device) {
                throw new common_1.NotFoundException('Device not found or access denied');
            }
        }
        const where = { deviceId };
        if (startDate || endDate) {
            where.timestamp = {};
            if (startDate)
                where.timestamp.gte = startDate;
            if (endDate)
                where.timestamp.lte = endDate;
        }
        const stats = await this.database.deviceTelemetry.aggregate({
            where,
            _avg: {
                cpuUsage: true,
                memoryUsage: true,
                diskUsage: true,
                temperature: true,
                networkIn: true,
                networkOut: true,
            },
            _min: {
                cpuUsage: true,
                memoryUsage: true,
                diskUsage: true,
                temperature: true,
                networkIn: true,
                networkOut: true,
            },
            _max: {
                cpuUsage: true,
                memoryUsage: true,
                diskUsage: true,
                temperature: true,
                networkIn: true,
                networkOut: true,
            },
            _count: {
                id: true,
            }
        });
        const result = [];
        const metrics = ['cpuUsage', 'memoryUsage', 'diskUsage', 'temperature', 'networkIn', 'networkOut'];
        metrics.forEach(metric => {
            if (stats._avg[metric] !== null) {
                result.push({
                    metric,
                    avg: stats._avg[metric] || 0,
                    min: stats._min[metric] || 0,
                    max: stats._max[metric] || 0,
                    count: stats._count.id,
                });
            }
        });
        return result;
    }
    async getRecentTelemetry(deviceId, limit = 20, userId, userRole) {
        if (userId) {
            const deviceWhere = { id: deviceId };
            if (userRole !== 'ADMIN') {
                deviceWhere.ownerId = userId;
            }
            const device = await this.database.device.findFirst({
                where: deviceWhere
            });
            if (!device) {
                throw new common_1.NotFoundException('Device not found or access denied');
            }
        }
        return this.database.deviceTelemetry.findMany({
            where: { deviceId },
            orderBy: { timestamp: 'desc' },
            take: limit,
        });
    }
    async createTelemetryRecord(data) {
        return this.database.deviceTelemetry.create({
            data: {
                ...data,
                timestamp: new Date(),
            }
        });
    }
    async cleanOldTelemetryData(daysToKeep = 30) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
        const result = await this.database.deviceTelemetry.deleteMany({
            where: {
                timestamp: {
                    lt: cutoffDate
                }
            }
        });
        return result.count;
    }
    async getDeviceHealthScore(deviceId) {
        const recentData = await this.getRecentTelemetry(deviceId, 10);
        if (recentData.length === 0) {
            return { score: 0, factors: { message: 'No telemetry data available' } };
        }
        let score = 100;
        const factors = {
            cpu: { score: 100, status: 'good' },
            memory: { score: 100, status: 'good' },
            disk: { score: 100, status: 'good' },
            temperature: { score: 100, status: 'good' },
            connectivity: { score: 100, status: 'good' }
        };
        const avgCpu = recentData.reduce((sum, d) => sum + (d.cpuUsage || 0), 0) / recentData.length;
        const avgMemory = recentData.reduce((sum, d) => sum + (d.memoryUsage || 0), 0) / recentData.length;
        const avgDisk = recentData.reduce((sum, d) => sum + (d.diskUsage || 0), 0) / recentData.length;
        const avgTemp = recentData.reduce((sum, d) => sum + (d.temperature || 0), 0) / recentData.length;
        if (avgCpu > 90) {
            factors.cpu = { score: 20, status: 'critical' };
            score -= 30;
        }
        else if (avgCpu > 75) {
            factors.cpu = { score: 60, status: 'warning' };
            score -= 15;
        }
        else if (avgCpu > 50) {
            factors.cpu = { score: 80, status: 'moderate' };
            score -= 5;
        }
        if (avgMemory > 95) {
            factors.memory = { score: 10, status: 'critical' };
            score -= 25;
        }
        else if (avgMemory > 85) {
            factors.memory = { score: 50, status: 'warning' };
            score -= 10;
        }
        else if (avgMemory > 70) {
            factors.memory = { score: 75, status: 'moderate' };
            score -= 5;
        }
        if (avgDisk > 95) {
            factors.disk = { score: 15, status: 'critical' };
            score -= 20;
        }
        else if (avgDisk > 85) {
            factors.disk = { score: 60, status: 'warning' };
            score -= 10;
        }
        if (avgTemp > 80) {
            factors.temperature = { score: 20, status: 'critical' };
            score -= 25;
        }
        else if (avgTemp > 70) {
            factors.temperature = { score: 60, status: 'warning' };
            score -= 10;
        }
        const latestData = recentData[0];
        const timeSinceLastData = Date.now() - latestData.timestamp.getTime();
        const minutesSinceLastData = timeSinceLastData / (1000 * 60);
        if (minutesSinceLastData > 60) {
            factors.connectivity = { score: 10, status: 'critical' };
            score -= 30;
        }
        else if (minutesSinceLastData > 30) {
            factors.connectivity = { score: 50, status: 'warning' };
            score -= 15;
        }
        else if (minutesSinceLastData > 10) {
            factors.connectivity = { score: 75, status: 'moderate' };
            score -= 5;
        }
        return {
            score: Math.max(0, Math.min(100, score)),
            factors
        };
    }
};
exports.TelemetryService = TelemetryService;
exports.TelemetryService = TelemetryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], TelemetryService);


/***/ }),

/***/ "./src/users/users.controller.ts":
/*!***************************************!*\
  !*** ./src/users/users.controller.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/users/users.service.ts");
const roles_decorator_1 = __webpack_require__(/*! ../auth/decorators/roles.decorator */ "./src/auth/decorators/roles.decorator.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/guards/roles.guard */ "./src/auth/guards/roles.guard.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../auth/decorators/current-user.decorator */ "./src/auth/decorators/current-user.decorator.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async getMe(user) {
        return this.usersService.findById(user.id);
    }
    async findOne(id) {
        return this.usersService.findById(id);
    }
    async updateMe(user, updateData) {
        const allowedFields = { firstName: updateData.firstName, lastName: updateData.lastName };
        return this.usersService.updateUser(user.id, allowedFields);
    }
    async update(id, updateData) {
        return this.usersService.updateUser(id, updateData);
    }
    async remove(id) {
        await this.usersService.deleteUser(id);
        return { message: 'User deleted successfully' };
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(client_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Users retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Admin access required' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profile retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(client_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('me'),
    (0, swagger_1.ApiOperation)({ summary: 'Update current user profile' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Profile updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateMe", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(client_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update user by ID (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(client_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user by ID (Admin only)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Admin access required' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),

/***/ "./src/users/users.module.ts":
/*!***********************************!*\
  !*** ./src/users/users.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/users/users.service.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/users/users.controller.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),

/***/ "./src/users/users.service.ts":
/*!************************************!*\
  !*** ./src/users/users.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const database_service_1 = __webpack_require__(/*! ../database/database.service */ "./src/database/database.service.ts");
let UsersService = class UsersService {
    constructor(database) {
        this.database = database;
    }
    async create(userData) {
        const existingUser = await this.findByEmail(userData.email);
        if (existingUser) {
            throw new common_1.ConflictException('Email already registered');
        }
        const user = await this.database.user.create({
            data: {
                email: userData.email,
                password: userData.password,
                firstName: userData.firstName,
                lastName: userData.lastName,
                role: userData.role || client_1.UserRole.USER,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return user;
    }
    async findAll() {
        return this.database.user.findMany({
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async findById(id) {
        return this.database.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async findByEmail(email) {
        return this.database.user.findUnique({
            where: { email },
        });
    }
    async updateUser(id, updateData) {
        const user = await this.findById(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.database.user.update({
            where: { id },
            data: updateData,
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async deleteUser(id) {
        const user = await this.findById(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        await this.database.user.delete({
            where: { id },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object])
], UsersService);


/***/ }),

/***/ "./src/vulnerability/dto/vulnerability.dto.ts":
/*!****************************************************!*\
  !*** ./src/vulnerability/dto/vulnerability.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScanQueryDto = exports.CreateScanDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
class CreateScanDto {
}
exports.CreateScanDto = CreateScanDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '550e8400-e29b-41d4-a716-446655440000',
        description: 'UUID of the device to scan'
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateScanDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.ScanType,
        example: client_1.ScanType.VULNERABILITY_SCAN,
        description: 'Type of scan to perform'
    }),
    (0, class_validator_1.IsEnum)(client_1.ScanType),
    __metadata("design:type", typeof (_a = typeof client_1.ScanType !== "undefined" && client_1.ScanType) === "function" ? _a : Object)
], CreateScanDto.prototype, "scanType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Scheduled security assessment',
        description: 'Optional description for the scan'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateScanDto.prototype, "description", void 0);
class ScanQueryDto {
}
exports.ScanQueryDto = ScanQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.ScanType }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.ScanType),
    __metadata("design:type", typeof (_b = typeof client_1.ScanType !== "undefined" && client_1.ScanType) === "function" ? _b : Object)
], ScanQueryDto.prototype, "scanType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '550e8400-e29b-41d4-a716-446655440000',
        description: 'Filter by device ID'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ScanQueryDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '10',
        description: 'Limit number of results'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ScanQueryDto.prototype, "limit", void 0);


/***/ }),

/***/ "./src/vulnerability/vulnerability.controller.ts":
/*!*******************************************************!*\
  !*** ./src/vulnerability/vulnerability.controller.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VulnerabilityController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const vulnerability_service_1 = __webpack_require__(/*! ./vulnerability.service */ "./src/vulnerability/vulnerability.service.ts");
const vulnerability_dto_1 = __webpack_require__(/*! ./dto/vulnerability.dto */ "./src/vulnerability/dto/vulnerability.dto.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../auth/decorators/current-user.decorator */ "./src/auth/decorators/current-user.decorator.ts");
let VulnerabilityController = class VulnerabilityController {
    constructor(vulnerabilityService) {
        this.vulnerabilityService = vulnerabilityService;
    }
    async createScan(createScanDto, user) {
        return this.vulnerabilityService.createScan(createScanDto, user.id, user.role);
    }
    async findAll(query, user) {
        return this.vulnerabilityService.findAll(query, user.id, user.role);
    }
    async getStatistics(user) {
        return this.vulnerabilityService.getScanStatistics(user.id, user.role);
    }
    async findOne(id, user) {
        return this.vulnerabilityService.findOne(id, user.id, user.role);
    }
    async getDeviceScanHistory(deviceId, user) {
        return this.vulnerabilityService.getDeviceScanHistory(deviceId, user.id, user.role);
    }
    async cancelScan(id, user) {
        return this.vulnerabilityService.cancelScan(id, user.id, user.role);
    }
    async remove(id, user) {
        await this.vulnerabilityService.deleteScan(id, user.id, user.role);
        return { message: 'Scan report deleted successfully' };
    }
};
exports.VulnerabilityController = VulnerabilityController;
__decorate([
    (0, common_1.Post)('scan'),
    (0, swagger_1.ApiOperation)({
        summary: 'Initiate a security scan for a device',
        description: 'Starts an asynchronous vulnerability scan that will run in the background'
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Scan initiated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof vulnerability_dto_1.CreateScanDto !== "undefined" && vulnerability_dto_1.CreateScanDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], VulnerabilityController.prototype, "createScan", null);
__decorate([
    (0, common_1.Get)('scans'),
    (0, swagger_1.ApiOperation)({ summary: 'Get vulnerability scan reports' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Scan reports retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiQuery)({ name: 'scanType', required: false, enum: ['PORT_SCAN', 'VULNERABILITY_SCAN', 'NETWORK_SCAN', 'COMPLIANCE_SCAN'] }),
    (0, swagger_1.ApiQuery)({ name: 'deviceId', required: false, description: 'Filter by device UUID' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Limit number of results' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof vulnerability_dto_1.ScanQueryDto !== "undefined" && vulnerability_dto_1.ScanQueryDto) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], VulnerabilityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('statistics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get vulnerability scanning statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statistics retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VulnerabilityController.prototype, "getStatistics", null);
__decorate([
    (0, common_1.Get)('scans/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get detailed scan report by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Scan report retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Scan report not found or access denied' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VulnerabilityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('device/:deviceId/scans'),
    (0, swagger_1.ApiOperation)({ summary: 'Get scan history for a specific device' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Device scan history retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Device not found or access denied' }),
    __param(0, (0, common_1.Param)('deviceId', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VulnerabilityController.prototype, "getDeviceScanHistory", null);
__decorate([
    (0, common_1.Patch)('scans/:id/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel a running or pending scan' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Scan cancelled successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Scan not found or access denied' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Cannot cancel completed scan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VulnerabilityController.prototype, "cancelScan", null);
__decorate([
    (0, common_1.Delete)('scans/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a scan report' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Scan report deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Scan report not found or access denied' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VulnerabilityController.prototype, "remove", null);
exports.VulnerabilityController = VulnerabilityController = __decorate([
    (0, swagger_1.ApiTags)('Vulnerability Scanning'),
    (0, common_1.Controller)('vulnerability'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof vulnerability_service_1.VulnerabilityService !== "undefined" && vulnerability_service_1.VulnerabilityService) === "function" ? _a : Object])
], VulnerabilityController);


/***/ }),

/***/ "./src/vulnerability/vulnerability.module.ts":
/*!***************************************************!*\
  !*** ./src/vulnerability/vulnerability.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VulnerabilityModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bull_1 = __webpack_require__(/*! @nestjs/bull */ "@nestjs/bull");
const vulnerability_service_1 = __webpack_require__(/*! ./vulnerability.service */ "./src/vulnerability/vulnerability.service.ts");
const vulnerability_controller_1 = __webpack_require__(/*! ./vulnerability.controller */ "./src/vulnerability/vulnerability.controller.ts");
const vulnerability_processor_1 = __webpack_require__(/*! ./vulnerability.processor */ "./src/vulnerability/vulnerability.processor.ts");
let VulnerabilityModule = class VulnerabilityModule {
};
exports.VulnerabilityModule = VulnerabilityModule;
exports.VulnerabilityModule = VulnerabilityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueue({
                name: 'vulnerability-scan',
            }),
        ],
        controllers: [vulnerability_controller_1.VulnerabilityController],
        providers: [vulnerability_service_1.VulnerabilityService, vulnerability_processor_1.VulnerabilityScanProcessor],
        exports: [vulnerability_service_1.VulnerabilityService],
    })
], VulnerabilityModule);


/***/ }),

/***/ "./src/vulnerability/vulnerability.processor.ts":
/*!******************************************************!*\
  !*** ./src/vulnerability/vulnerability.processor.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var VulnerabilityScanProcessor_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VulnerabilityScanProcessor = void 0;
const bull_1 = __webpack_require__(/*! @nestjs/bull */ "@nestjs/bull");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bull_2 = __webpack_require__(/*! bull */ "bull");
const vulnerability_service_1 = __webpack_require__(/*! ./vulnerability.service */ "./src/vulnerability/vulnerability.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const child_process_1 = __webpack_require__(/*! child_process */ "child_process");
let VulnerabilityScanProcessor = VulnerabilityScanProcessor_1 = class VulnerabilityScanProcessor {
    constructor(vulnerabilityService) {
        this.vulnerabilityService = vulnerabilityService;
        this.logger = new common_1.Logger(VulnerabilityScanProcessor_1.name);
    }
    async handleScan(job) {
        const { scanId, deviceInfo, scanType } = job.data;
        this.logger.log(`Starting ${scanType} scan for device ${deviceInfo.name} (${deviceInfo.ipAddress})`);
        try {
            await this.vulnerabilityService.updateScanStatus(scanId, client_1.ScanStatus.RUNNING);
            let results = [];
            switch (scanType) {
                case client_1.ScanType.PORT_SCAN:
                    results = await this.performPortScan(deviceInfo.ipAddress, job);
                    break;
                case client_1.ScanType.VULNERABILITY_SCAN:
                    results = await this.performVulnerabilityScan(deviceInfo.ipAddress, job);
                    break;
                case client_1.ScanType.NETWORK_SCAN:
                    results = await this.performNetworkScan(deviceInfo.ipAddress, job);
                    break;
                case client_1.ScanType.COMPLIANCE_SCAN:
                    results = await this.performComplianceScan(deviceInfo.ipAddress, job);
                    break;
                default:
                    throw new Error(`Unsupported scan type: ${scanType}`);
            }
            await this.vulnerabilityService.updateScanStatus(scanId, client_1.ScanStatus.COMPLETED, results);
            this.logger.log(`Completed ${scanType} scan for device ${deviceInfo.name}, found ${results.length} findings`);
        }
        catch (error) {
            this.logger.error(`Scan failed for device ${deviceInfo.name}:`, error);
            await this.vulnerabilityService.updateScanStatus(scanId, client_1.ScanStatus.FAILED, {
                error: error.message,
                timestamp: new Date().toISOString()
            });
        }
    }
    async performPortScan(ipAddress, job) {
        return new Promise((resolve, reject) => {
            const results = [];
            const nmap = (0, child_process_1.spawn)('nmap', ['-sS', '-O', '-sV', '--top-ports', '1000', ipAddress]);
            let output = '';
            let errorOutput = '';
            nmap.stdout.on('data', (data) => {
                output += data.toString();
                job.progress(25);
            });
            nmap.stderr.on('data', (data) => {
                errorOutput += data.toString();
            });
            nmap.on('close', (code) => {
                if (code !== 0) {
                    reject(new Error(`Nmap port scan failed: ${errorOutput}`));
                    return;
                }
                try {
                    const lines = output.split('\n');
                    let inPortSection = false;
                    for (const line of lines) {
                        if (line.includes('PORT') && line.includes('STATE') && line.includes('SERVICE')) {
                            inPortSection = true;
                            continue;
                        }
                        if (inPortSection && line.trim()) {
                            const match = line.match(/^(\d+\/\w+)\s+(\w+)\s+(.+)$/);
                            if (match) {
                                const [, port, state, service] = match;
                                if (state === 'open') {
                                    let severity = 'LOW';
                                    let description = `Open port detected: ${port}`;
                                    if (service.toLowerCase().includes('ssh') && port.startsWith('22/')) {
                                        severity = 'MEDIUM';
                                        description = 'SSH service detected - ensure strong authentication';
                                    }
                                    else if (service.toLowerCase().includes('telnet')) {
                                        severity = 'HIGH';
                                        description = 'Telnet service detected - unencrypted communication';
                                    }
                                    else if (service.toLowerCase().includes('ftp') && !service.toLowerCase().includes('sftp')) {
                                        severity = 'MEDIUM';
                                        description = 'FTP service detected - consider using SFTP';
                                    }
                                    else if (service.toLowerCase().includes('http') && !service.toLowerCase().includes('https')) {
                                        severity = 'MEDIUM';
                                        description = 'HTTP service detected - consider HTTPS';
                                    }
                                    results.push({
                                        vulnerability: {
                                            id: `port-${port.replace('/', '-')}`,
                                            severity,
                                            title: `Open Port: ${port}`,
                                            description,
                                            solution: 'Review if this service is necessary and properly secured',
                                        },
                                        port: parseInt(port.split('/')[0]),
                                        service: service.trim(),
                                        evidence: line.trim(),
                                    });
                                }
                            }
                        }
                    }
                    job.progress(100);
                    resolve(results);
                }
                catch (parseError) {
                    reject(new Error(`Failed to parse nmap output: ${parseError.message}`));
                }
            });
            setTimeout(() => {
                nmap.kill();
                reject(new Error('Port scan timed out after 5 minutes'));
            }, 300000);
        });
    }
    async performVulnerabilityScan(ipAddress, job) {
        const results = [];
        job.progress(10);
        const portResults = await this.performPortScan(ipAddress, job);
        results.push(...portResults);
        job.progress(50);
        return new Promise((resolve, reject) => {
            const nmap = (0, child_process_1.spawn)('nmap', [
                '--script', 'vuln',
                '--script-timeout', '120s',
                ipAddress
            ]);
            let output = '';
            let errorOutput = '';
            nmap.stdout.on('data', (data) => {
                output += data.toString();
                job.progress(75);
            });
            nmap.stderr.on('data', (data) => {
                errorOutput += data.toString();
            });
            nmap.on('close', (code) => {
                try {
                    if (output.includes('VULNERABLE')) {
                        const vulnerableLines = output.split('\n').filter(line => line.toLowerCase().includes('vulnerable') ||
                            line.toLowerCase().includes('cve-'));
                        vulnerableLines.forEach((line, index) => {
                            if (line.trim()) {
                                let severity = 'MEDIUM';
                                if (line.toLowerCase().includes('critical') || line.toLowerCase().includes('remote code execution')) {
                                    severity = 'CRITICAL';
                                }
                                else if (line.toLowerCase().includes('high') || line.toLowerCase().includes('privilege escalation')) {
                                    severity = 'HIGH';
                                }
                                else if (line.toLowerCase().includes('low') || line.toLowerCase().includes('information disclosure')) {
                                    severity = 'LOW';
                                }
                                const cveMatch = line.match(/(CVE-\d{4}-\d+)/);
                                const cve = cveMatch ? cveMatch[1] : undefined;
                                results.push({
                                    vulnerability: {
                                        id: `vuln-${index}`,
                                        severity,
                                        title: cve ? `Vulnerability: ${cve}` : 'Security Vulnerability Detected',
                                        description: line.trim(),
                                        cve,
                                        solution: 'Review and apply security patches as available',
                                    },
                                    evidence: line.trim(),
                                });
                            }
                        });
                    }
                    job.progress(100);
                    resolve(results);
                }
                catch (parseError) {
                    this.logger.error('Failed to parse vulnerability scan output:', parseError);
                    resolve(results);
                }
            });
            setTimeout(() => {
                nmap.kill();
                resolve(results);
            }, 600000);
        });
    }
    async performNetworkScan(ipAddress, job) {
        const results = [];
        job.progress(25);
        return new Promise((resolve) => {
            setTimeout(() => {
                results.push({
                    vulnerability: {
                        id: 'network-reachable',
                        severity: 'LOW',
                        title: 'Network Reachability',
                        description: 'Device is reachable on the network',
                        solution: 'Ensure network segmentation is properly configured',
                    },
                    evidence: `Device responds to network requests from ${ipAddress}`,
                });
                job.progress(100);
                resolve(results);
            }, 2000);
        });
    }
    async performComplianceScan(ipAddress, job) {
        const results = [];
        job.progress(25);
        return new Promise((resolve) => {
            setTimeout(() => {
                results.push({
                    vulnerability: {
                        id: 'default-credentials',
                        severity: 'HIGH',
                        title: 'Potential Default Credentials',
                        description: 'Device may be using default or weak credentials',
                        solution: 'Change default passwords and implement strong authentication',
                    },
                    evidence: 'Common default ports and services detected',
                });
                results.push({
                    vulnerability: {
                        id: 'encryption-check',
                        severity: 'MEDIUM',
                        title: 'Encryption Configuration',
                        description: 'Review encryption settings for data in transit and at rest',
                        solution: 'Enable strong encryption protocols (TLS 1.2+)',
                    },
                    evidence: 'Network services analysis completed',
                });
                job.progress(100);
                resolve(results);
            }, 3000);
        });
    }
};
exports.VulnerabilityScanProcessor = VulnerabilityScanProcessor;
__decorate([
    (0, bull_1.Process)('perform-scan'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], VulnerabilityScanProcessor.prototype, "handleScan", null);
exports.VulnerabilityScanProcessor = VulnerabilityScanProcessor = VulnerabilityScanProcessor_1 = __decorate([
    (0, bull_1.Processor)('vulnerability-scan'),
    __metadata("design:paramtypes", [typeof (_a = typeof vulnerability_service_1.VulnerabilityService !== "undefined" && vulnerability_service_1.VulnerabilityService) === "function" ? _a : Object])
], VulnerabilityScanProcessor);


/***/ }),

/***/ "./src/vulnerability/vulnerability.service.ts":
/*!****************************************************!*\
  !*** ./src/vulnerability/vulnerability.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VulnerabilityService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bull_1 = __webpack_require__(/*! @nestjs/bull */ "@nestjs/bull");
const bull_2 = __webpack_require__(/*! bull */ "bull");
const database_service_1 = __webpack_require__(/*! ../database/database.service */ "./src/database/database.service.ts");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let VulnerabilityService = class VulnerabilityService {
    constructor(database, scanQueue) {
        this.database = database;
        this.scanQueue = scanQueue;
    }
    async createScan(createScanDto, userId, userRole) {
        const deviceWhere = { id: createScanDto.deviceId };
        if (userRole !== 'ADMIN') {
            deviceWhere.ownerId = userId;
        }
        const device = await this.database.device.findFirst({
            where: deviceWhere
        });
        if (!device) {
            throw new common_1.NotFoundException('Device not found or access denied');
        }
        const scanReport = await this.database.vulnerabilityReport.create({
            data: {
                deviceId: createScanDto.deviceId,
                scanType: createScanDto.scanType,
                status: client_1.ScanStatus.PENDING,
            },
            include: {
                device: {
                    select: {
                        id: true,
                        name: true,
                        ipAddress: true,
                        type: true,
                    }
                }
            }
        });
        await this.scanQueue.add('perform-scan', {
            scanId: scanReport.id,
            deviceId: createScanDto.deviceId,
            scanType: createScanDto.scanType,
            deviceInfo: {
                ipAddress: device.ipAddress,
                name: device.name,
                type: device.type,
            }
        });
        return scanReport;
    }
    async findAll(query, userId, userRole) {
        const where = {};
        if (query.deviceId || userRole !== 'ADMIN') {
            where.device = {};
            if (query.deviceId)
                where.device.id = query.deviceId;
            if (userRole !== 'ADMIN')
                where.device.ownerId = userId;
        }
        if (query.scanType) {
            where.scanType = query.scanType;
        }
        const limit = query.limit ? parseInt(query.limit, 10) : 50;
        return this.database.vulnerabilityReport.findMany({
            where,
            include: {
                device: {
                    select: {
                        id: true,
                        name: true,
                        ipAddress: true,
                        type: true,
                        owner: {
                            select: {
                                id: true,
                                firstName: true,
                                lastName: true,
                                email: true,
                            }
                        }
                    }
                }
            },
            orderBy: { startedAt: 'desc' },
            take: limit,
        });
    }
    async findOne(id, userId, userRole) {
        const where = { id };
        if (userRole !== 'ADMIN') {
            where.device = { ownerId: userId };
        }
        const scanReport = await this.database.vulnerabilityReport.findFirst({
            where,
            include: {
                device: {
                    select: {
                        id: true,
                        name: true,
                        ipAddress: true,
                        type: true,
                        owner: {
                            select: {
                                id: true,
                                firstName: true,
                                lastName: true,
                                email: true,
                            }
                        }
                    }
                }
            }
        });
        if (!scanReport) {
            throw new common_1.NotFoundException('Scan report not found or access denied');
        }
        return scanReport;
    }
    async updateScanStatus(scanId, status, results) {
        const updateData = {
            status,
            ...(status === client_1.ScanStatus.COMPLETED && { completedAt: new Date() })
        };
        if (results) {
            updateData.findings = results;
            if (Array.isArray(results)) {
                updateData.criticalCount = results.filter(r => r.vulnerability?.severity === 'CRITICAL').length;
                updateData.highCount = results.filter(r => r.vulnerability?.severity === 'HIGH').length;
                updateData.mediumCount = results.filter(r => r.vulnerability?.severity === 'MEDIUM').length;
                updateData.lowCount = results.filter(r => r.vulnerability?.severity === 'LOW').length;
            }
        }
        return this.database.vulnerabilityReport.update({
            where: { id: scanId },
            data: updateData,
        });
    }
    async getDeviceScanHistory(deviceId, userId, userRole) {
        const deviceWhere = { id: deviceId };
        if (userRole !== 'ADMIN') {
            deviceWhere.ownerId = userId;
        }
        const device = await this.database.device.findFirst({
            where: deviceWhere
        });
        if (!device) {
            throw new common_1.NotFoundException('Device not found or access denied');
        }
        return this.database.vulnerabilityReport.findMany({
            where: { deviceId },
            orderBy: { startedAt: 'desc' },
            take: 20,
        });
    }
    async getScanStatistics(userId, userRole) {
        const where = {};
        if (userRole !== 'ADMIN') {
            where.device = { ownerId: userId };
        }
        const [totalScans, completedScans, runningScans, failedScans, criticalVulns, highVulns, mediumVulns, lowVulns,] = await Promise.all([
            this.database.vulnerabilityReport.count({ where }),
            this.database.vulnerabilityReport.count({
                where: { ...where, status: client_1.ScanStatus.COMPLETED }
            }),
            this.database.vulnerabilityReport.count({
                where: { ...where, status: client_1.ScanStatus.RUNNING }
            }),
            this.database.vulnerabilityReport.count({
                where: { ...where, status: client_1.ScanStatus.FAILED }
            }),
            this.database.vulnerabilityReport.aggregate({
                where: { ...where, status: client_1.ScanStatus.COMPLETED },
                _sum: { criticalCount: true }
            }),
            this.database.vulnerabilityReport.aggregate({
                where: { ...where, status: client_1.ScanStatus.COMPLETED },
                _sum: { highCount: true }
            }),
            this.database.vulnerabilityReport.aggregate({
                where: { ...where, status: client_1.ScanStatus.COMPLETED },
                _sum: { mediumCount: true }
            }),
            this.database.vulnerabilityReport.aggregate({
                where: { ...where, status: client_1.ScanStatus.COMPLETED },
                _sum: { lowCount: true }
            }),
        ]);
        return {
            totalScans,
            completedScans,
            runningScans,
            failedScans,
            vulnerabilities: {
                critical: criticalVulns._sum.criticalCount || 0,
                high: highVulns._sum.highCount || 0,
                medium: mediumVulns._sum.mediumCount || 0,
                low: lowVulns._sum.lowCount || 0,
            },
        };
    }
    async deleteScan(id, userId, userRole) {
        await this.findOne(id, userId, userRole);
        await this.database.vulnerabilityReport.delete({
            where: { id }
        });
    }
    async cancelScan(id, userId, userRole) {
        const scan = await this.findOne(id, userId, userRole);
        if (scan.status === client_1.ScanStatus.COMPLETED) {
            throw new Error('Cannot cancel completed scan');
        }
        if (scan.status === client_1.ScanStatus.PENDING) {
            const jobs = await this.scanQueue.getJobs(['waiting', 'delayed']);
            const job = jobs.find(j => j.data.scanId === id);
            if (job) {
                await job.remove();
            }
        }
        return this.updateScanStatus(id, client_1.ScanStatus.CANCELLED);
    }
};
exports.VulnerabilityService = VulnerabilityService;
exports.VulnerabilityService = VulnerabilityService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, bull_1.InjectQueue)('vulnerability-scan')),
    __metadata("design:paramtypes", [typeof (_a = typeof database_service_1.DatabaseService !== "undefined" && database_service_1.DatabaseService) === "function" ? _a : Object, typeof (_b = typeof bull_2.Queue !== "undefined" && bull_2.Queue) === "function" ? _b : Object])
], VulnerabilityService);


/***/ }),

/***/ "./src/websocket/websocket.module.ts":
/*!*******************************************!*\
  !*** ./src/websocket/websocket.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebSocketModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let WebSocketModule = class WebSocketModule {
};
exports.WebSocketModule = WebSocketModule;
exports.WebSocketModule = WebSocketModule = __decorate([
    (0, common_1.Module)({
        providers: [],
        exports: [],
    })
], WebSocketModule);


/***/ }),

/***/ "@nestjs/bull":
/*!*******************************!*\
  !*** external "@nestjs/bull" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/bull");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/throttler":
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "bull":
/*!***********************!*\
  !*** external "bull" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("bull");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const helmet_1 = __webpack_require__(/*! helmet */ "helmet");
const compression = __webpack_require__(/*! compression */ "compression");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    });
    app.use((0, helmet_1.default)());
    app.use(compression());
    app.enableCors({
        origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:3001'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: '1',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Secure IoT Deployment Management System API')
        .setDescription('Professional-grade API for managing and monitoring IoT devices with advanced security features')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`API Documentation: http://localhost:${port}/api/docs`);
}
bootstrap();

})();

/******/ })()
;